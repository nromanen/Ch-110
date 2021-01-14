class AdminController < ApplicationController

  before_action :is_admin
  before_action :authenticate_user!

  def index
    @users = User.all
    @patient_profiles = PatientProfile.all
    @enum_blood_types = PatientProfile.blood_types
  end

  private

  def is_admin
    unless current_user && current_user.role == 'admin'
      redirect_to root_path, alert: 'You are not admin'
    end
  end
end
