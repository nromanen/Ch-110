class ScheduleValidator < ActiveModel::Validator
  def validate(record)
    @doctor = User.find_by_id(record.user_id)
    @visit_type = VisitType.find_by_id(record.visit_type)
    @errors = record.errors
    @start_time = record.start_time
    @end_time = record.end_time
    @start_date = record.start_date
    @end_date = record.end_date
    @day = record.day

    user_is_doctor if @doctor
    time_is_valid if @start_time && @end_time
    date_is_valid if @start_date && @end_date
    date_not_in_past if @end_date
    date_not_in_schedule if @start_date && @doctor

  end

  def user_is_doctor
    unless @doctor.role == 'doctor'
      @errors.add(:user_id, "Schedules are available only for doctors")
    end
  end

  def time_is_valid
    if @start_time >= @end_time or @end_time - 1.hour < @start_time
      @errors.add(:base, "Time interval less than 1 hour")
    end
  end

  def date_is_valid
    if @start_date > @end_date
      @errors.add(:base, "Invalid date interval")
    end
  end

  def date_not_in_past
    if @end_date < DateTime.now
      @errors.add(:end_date, "can't be in past")
    end
  end

  def date_not_in_schedule
    schedule_list = Schedule.where("end_date > :start_date AND day = :day AND user_id = :user_id",
                                  {start_date: @start_date, day: Schedule.days[@day], user_id: @doctor.id})
    unless schedule_list.empty?
      @errors.add(:base, "Schedule for this period already exist")
    end
  end
end
