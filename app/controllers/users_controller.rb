class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def users_to_react_form
    @users = User.all
    render json: @users
  end

  def find_doctor_by_id
    @doctor = User.find(params[:id])
    puts @doctor
    render json: @doctor
  end

  private

  def user_params
    params.require(:user).permit(:id)
  end
end
