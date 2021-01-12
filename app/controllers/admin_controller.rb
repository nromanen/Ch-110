class AdminController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all
    @patient_profiles = PatientProfile.all
    @enum_blood_types = PatientProfile.blood_types
  end
end
