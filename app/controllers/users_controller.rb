class UsersController < ApplicationController
  before_action :authenticate_user!

  # after_action :verify_authorized
  after_action :verify_policy_scoped, only: :index

  def index
    @users = policy_scope(User)
    authorize @users, policy_class: UserPolicy
  end

  def show
    @user = current_user
    authorize @user, policy_class: UserPolicy
  end

  def users_to_react_form
    @users = User.all
    authorize @users, policy_class: UserPolicy
    render json: @users
  end

  def find_doctor_by_id
    @doctor = User.find(params[:id])
    authorize @doctor, policy_class: UserPolicy
    render json: @doctor
  end

  def manage
    authorize current_user, policy_class: UserPolicy
  end

  def get_patients
    @patients = User.where(role: 'patient')
    authorize @patients, policy_class: UserPolicy
  end

  def get_doctors
    @doctors = User.where(role: 'doctor')
    authorize @doctors
  end

  private

  def user_params
    params.require(:user).permit(:id)
  end
end
