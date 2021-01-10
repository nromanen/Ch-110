class ScheduleValidator < ActiveModel::Validator
  def validate(record)
    @doctor = User.find_by_id(record.user_id)
    @visit_type = VisitType.find_by_id(record.visit_type)
    @errors = record.errors
    @start_time = record.start_time
    @end_time = record.end_time
    @start_date = record.start_date
    @end_date = record.end_date

    user_is_doctor
    time_is_valid
    date_is_valid
  end

  def user_is_doctor
    unless @doctor.role == 'doctor'
      @errors.add(:user_id, "Schedules are available only for doctors")
    end
  end

  def time_is_valid
    if @start_time > @end_time
      @errors.add(:start_time, "Invalid time interval")
    end
  end

  def date_is_valid
    if @start_date > @end_date
      @errors.add(:start_date, "Invalid date interval")
    end
  end

end