class ApplicationController < ActionController::Base
  include Pundit
  before_action :user_is_active?, :departments_list

  def departments_list
    #@doctor_departments = DoctorProfile.select(:specialization).group(:specialization)
    @doctor_departments = DoctorProfile.specializations
  end 

  def user_is_active?
    if current_user.present? && !current_user.is_active
      sign_out current_user
      flash[:error] = "This account has been deleted. Contact administrator."
      redirect_to root_path
    end
  end
end

