class ApplicationController < ActionController::Base
  include Pundit

  before_action :user_is_active?, :set_locale, :departments_list

  rescue_from Pundit::NotAuthorizedError do
    redirect_back fallback_location: root_url, alert: 'You do not have access to this page'
  end

  def departments_list
    @doctor_departments = DoctorProfile.specializations
  end 

  def user_is_active?
    if current_user.present? && !current_user.is_active
      sign_out current_user
      flash[:error] = "This account has been deleted. Contact administrator."
      redirect_to root_path
    end
  end

  private

  def default_url_options
    {locale: I18n.locale}
  end

  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end

  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ?
        parsed_locale.to_sym :
        nil
  end
end

