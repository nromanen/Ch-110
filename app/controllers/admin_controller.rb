class AdminController < ApplicationController
  def index
    @users = User.all
    @patient_profiles = PatientProfile.all
    @enum_blood_types = PatientProfile.blood_types
  end
end
