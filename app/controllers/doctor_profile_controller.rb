class DoctorProfileController < ApplicationController

  before_action :set_doctor_profile, only: [ :show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token


  def index
    @doctor_profiles = DoctorProfile.all
    @users = User.order(:name)
  end

  def new
    @doctor_profile = DoctorProfile.new
  end

  def show
    render json: @doctor_profile
  end

  def show_by_query_params

  end

  def edit
  end

  def create
    @doctor_profile = DoctorProfile.new(doctor_profile_params)

    if @doctor_profile.save
      render json: @doctor_profile, status: :created
    else
      render json: @doctor_profile.errors, status: :unprocessable_entity
    end
  end

  def update
    if @doctor_profile.update(doctor_profile_params)
      render json: @doctor_profile
    else
      render json: @doctor_profile.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor_profile.destroy
    render json: @doctor_profile
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_doctor_profile
    @doctor_profile = DoctorProfile.find ( params[:id] )
  rescue ActiveRecord::RecordNotFound => e
      logger.info e
      return render json: { message: 'user id not found' }, status: :not_found
  end

  # Only allow a list of trusted parameters through.
  def doctor_profile_params
    params.require(:doctor_profile).permit(:photo_path, :specialization, :description, :user_id)
  end

end
