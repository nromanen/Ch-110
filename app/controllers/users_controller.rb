class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def users_to_react_form
    @users = User.all
    render json: @users
  end
end
