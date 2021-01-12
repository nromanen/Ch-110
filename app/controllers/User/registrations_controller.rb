# frozen_string_literal: true

class User::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  # GET /resource/sign_up
  def new
    super
  end

  # POST /resource
  def create
    super
  end

  # GET /resource/edit
  def edit
    super
  end

  # PUT /resource
  def update
    super
  end

  # DELETE /resource
  def destroy
    if current_user.role == 'patient'
      patient_visits = Visit.where(patient_id: current_user.id)
      puts "============================================"
      puts patient_visits
      patient_visits.each do |visit|
        puts visit.patient_id
        visit.patient_id = nil
        puts visit.patient_id
        visit.save!
      end
    elsif current_user.role == 'doctor'
      doctor_visits = Visit.where(doctor_id: current_user.id)
      doctor_visits.each do |visit|
        visit.doctor_id = nil
        visit.save
      end
    end
    # current_user.is_active = false
    # current_user.save
    # sign_out current_user
    # flash[:notice] = "Your account was successfully deleted."
    # redirect_to root_path
    super
  end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :surname, :phone_number])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:name, :surname, :phone_number])
  end

  # The path used after sign up.
  def after_sign_up_path_for(resource)
    super(resource)
  end

  # The path used after sign up for inactive accounts.
  def after_inactive_sign_up_path_for(resource)
    super(resource)
  end
end
