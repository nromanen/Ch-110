class PatientProfileController < ApplicationController

  before_action :set_patient_profile, only: [:show, :edit, :update, :destroy]

  def index
    @patient_profiles = PatientProfile.all
  end

  def new
    @patient_profile = PatientProfile.new
  end

  def show
  end

  def edit
  end

  def create
    @patient_profile = PatientProfile.new(doctor_params)

    if @patient_profile.save
      render json: @patient_profile, status: :created
    else
      render json: @patient_profile.errors, status: :unprocessable_entity
    end
  end

  def update
    if @patient_profile.update(doctor_params)
      render json: @patient_profile
    else
      render json: @patient_profile.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @patient_profile.destroy
    render json: @patient_profile
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_patient_profile
    @patient_profile = PatientProfile.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def patient_profile_params
    params.require(:patient_profile).permit(:height, :weight, :blood_type, :allergies)
  end
end
