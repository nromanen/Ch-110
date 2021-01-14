class SlotManager
  def initialize(schedule, date, doctor)
    @schedule = schedule
    @date = date
    @doctor = doctor
  end

  def get_slots
    slots = []
    slots_amount = (@schedule.end_time - @schedule.start_time).to_i / @schedule.visit_type.length.minutes.to_i
    slots_amount.times do | n |
      start_time = @schedule.start_time + (@schedule.visit_type.length.to_i * n).minutes
      end_time = @schedule.start_time + (@schedule.visit_type.length.to_i * (n + 1)).minutes
      slots << {start: start_time.strftime("%H:%M"),
                 end: end_time.strftime("%H:%M"),
                 available: SlotChecker.new(@doctor, @date + start_time.hour.hours + start_time.min.minutes).slot_check}
    end
    [visit_type_id: @schedule.visit_type.id, slots: slots]
  end
end

