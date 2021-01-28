class VisitValidator < ActiveModel::Validator

  def validate(record)
    if record.patient_id && record.doctor_id && record.start_time && record.visit_type_id
      @patient = User.find_by_id(record.patient_id)
      @doctor = User.find_by_id(record.doctor_id)
      @start_time = record.start_time
      @visit_type = VisitType.find_by_id(record.visit_type_id)
      @record_time = DateTime.new(2000, 1, 1, @start_time.strftime("%H").to_i, @start_time.strftime("%M").to_i)
      @errors = record.errors
    
    
      time_slot_not_busy
      schedule_present
      time_slot_is_in_schedule
      # time_slot_not_in_past
      time_slot_not_out_of_work_time
      visit_type_in_schedule
    end
  end

  def time_slot_not_busy
    busy_visit = Visit.find_by(doctor: @doctor, start_time: @start_time)
    if busy_visit
      @errors.add(:base, "Time slot is busy")
    end
  end

  def schedule_present
    @schedule = Schedule.where("start_date <= :chosen_date AND end_date >= :chosen_date AND user_id = :user_id AND day = :day",
                                   {chosen_date: @start_time, day: @start_time.strftime("%u"), user_id: @doctor.id}).order(created_at: :desc).last
    unless @schedule
      @errors.add(:base, "The doctor doesn't take patients on this day")
    end
  end

  def time_slot_is_in_schedule
    if @schedule && (@record_time.to_i - @schedule.start_time.to_i) % (@schedule.visit_type.length * 60) != 0
      @errors.add(:start_time, "not from schedule")
    end
  end

  def time_slot_not_in_past
    if (@start_time - Time.zone.now).to_i <= 0
      @errors.add(:start_time, "should be not in past")
    end
  end

  def time_slot_not_out_of_work_time
    if @schedule
      doctor_start = @schedule.start_time
      doctor_end = @schedule.end_time
      if @record_time < doctor_start
        @errors.add(:start_time, "should be not earlier #{Time.zone.at(doctor_start).strftime "%H:%M".to_s}")
      elsif @record_time > doctor_end
        @errors.add(:start_time, "should be not later #{Time.zone.at(doctor_end).strftime "%H:%M".to_s}")
      end
    end
  end

  def visit_type_in_schedule
    if @schedule
      unless @schedule.visit_type_id == @visit_type.id
        @errors.add(:visit_type, " should be the same as in schedule")
      end
    end
  end
end
