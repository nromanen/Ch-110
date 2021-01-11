class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def users_to_react_form
    @users = User.all
    render json: @users
  end

  def find_doctor_by_id

  end

end
