class FreeSlotValidator < ActiveModel::Validator
  #time step (seconds)
  TIME_STEP = 300

  def validate(record)
    doctor_slots = Visit.where(doctor_id: record.doctor_id,
                               start_time: (record.start_time - 1.day)..record.start_time.next_day)
    user_slots = Visit.where(user_id: record.user_id,
                             start_time: (record.start_time - 1.day)..record.start_time.next_day)
    doctor_slot = check_slots(record, doctor_slots)
    if doctor_slot
      record.errors[:base] << 'This time is busy'
    end
    user_slot = check_slots(record, user_slots)
    if user_slot && user_slot[:doctor_id] != record.doctor_id
      record.errors[:base] << 'You have visit to another doctor for this time'
    end
  end

  def check_slots(record, slots)
    slots.each do |slot|
      # checking reserved time slots
      slot_array = ((slot.start_time.to_i / TIME_STEP)..(slot.end_time.to_i) / TIME_STEP).to_a
      if (slot_array & ((record.start_time.to_i / TIME_STEP)..(record.end_time.to_i / TIME_STEP)).to_a).length > 1
        # looking for intersection current timeslot with others
        return slot
      end
    end
    false
  end
end

