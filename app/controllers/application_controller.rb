class ApplicationController < ActionController::Base
  include Pundit
  # before_action :current_user
  #
  # protected
  #
  # def current_user
  #   @current_user = User.find_by(id: session[:user_id])
  # end
end
