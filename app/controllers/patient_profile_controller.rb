class PatientProfileController < ApplicationController

  before_action :set_patient_profile, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  before_action :is_admin

  def index

    if params[:user_id]
      @patient_profile = PatientProfile.find_by(user_id: params[:user_id])

      if @patient_profile.nil?
        render json: { message: 'no profile' }
      else
        render json: @patient_profile
      end
    end

    @patient_profiles = PatientProfile.all
    @users = User.order(:name)
    @enum_blood_types = PatientProfile.blood_types
  end

  def new
    @patient_profile = PatientProfile.new
  end

  def show
    render json: @patient_profile
  end

  def edit
    @enum_blood_types = PatientProfile.blood_types
    render json: @patient_profile
  end

  def create
    @patient_profile = PatientProfile.new(patient_profile_params)

    if @patient_profile.save
      render json: @patient_profile, status: :created
    else
      render json: @patient_profile.errors.full_messages, status: :unprocessable_entity   #errors.full_messages
    end
  end

  def update
    if @patient_profile.update(patient_profile_params)
      render json: @patient_profile
    else
      render json: @patient_profile.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @patient_profile.destroy
    render json: @patient_profile
  end

  def get_items
    @patient_profiles = PatientProfile.all
    render json: @patient_profiles
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_patient_profile
    @patient_profile = PatientProfile.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def patient_profile_params
    params.require(:patient_profile).permit(:height, :weight, :blood_type, :allergies, :is_insured, :gender, :user_id)
  end

  def is_admin
    unless current_user && current_user.role == 'admin'
      redirect_to root_path, alert: 'You are not admin'
    end
  end

end
