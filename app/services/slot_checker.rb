class SlotChecker
  def initialize(doctor, start_time)
    @doctor = doctor
    @start_time = start_time
  end

  def slot_check
    if Visit.find_by(doctor: @doctor, start_time: @start_time)
      false
    else
      true
    end
  end
end
