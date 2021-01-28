class DoctorProfileController < ApplicationController

  before_action :set_doctor_profile, only: [ :show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token


  def index
=begin
    if params[:user_id]
      @doctor_profile = DoctorProfile.find_by(user_id: params[:user_id])
      
      #avatar = rails_blob_path(@doctor_profile.avatar)
      puts 'hello from users table ============'
      puts params[:user_id]
      

      if @doctor_profile.nil?
        render json: { message: 'no profile' }
      else
        render json: { doctor_profile: @doctor_profile }
      end
    end
=end
    @avatars = []

    @doctor_profiles = DoctorProfile.all
    @users = User.where(:role => 2).order(:name)
    @specializations = DoctorProfile.specializations
    @doctor_profiles.each do |doctor|
      @avatars << {
                  id: doctor.id,
                 avatar: rails_blob_path(doctor.avatar)
                }
    end
  end



  def new
    @doctor_profile = DoctorProfile.new
  end

  def show
    render json: @doctor_profile
  end

  def show_spec

    @doctor_spec = DoctorProfile.where(specialization: params[:position])
    @users = []

    @doctor_spec.each do |doctor|
      @users << {
                 name: doctor.user.name,
                 surname: doctor.user.surname,
                 specialization: doctor.specialization,
                 description: doctor.description,
                 photo_path: rails_blob_path(doctor.avatar),
                 id: doctor.user_id
                }
    end
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
      render json: @doctor_profile.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    doctor = DoctorProfile.find(params[:id])
    if doctor.avatar.attached? == false
      doctor.update(avatar: params[:avatar])
    end

    if @doctor_profile.update(doctor_profile_params)
      if params[:avatar] != nil
        @doctor_profile.update(avatar: params[:avatar])
        puts rails_blob_path(@doctor_profile.avatar)
      end
      render json: @doctor_profile
    else
      render json: @doctor_profile.errors.full_messages, status: :unprocessable_entity
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
    params.require(:doctor_profile).permit( :specialization, :description, :user_id, :position, :avatar)
  end

end
