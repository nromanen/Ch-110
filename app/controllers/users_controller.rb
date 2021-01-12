class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def users_to_react_form
    @users = User.all
    render json: @users
  end

  def manage

  end

  def get_patients
    @patients = User.where(role: 'patient')
  end

  def get_doctors
    @doctors = User.where(role: 'doctor')
  end
end
