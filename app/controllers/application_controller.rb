class ApplicationController < ActionController::Base
  include Pundit
  before_action :user_is_active?

  def user_is_active?
    if current_user.present? && !current_user.is_active
      sign_out current_user
      flash[:error] = "This account has been deleted. Contact administrator."
      redirect_to root_path
    end
  end
end

