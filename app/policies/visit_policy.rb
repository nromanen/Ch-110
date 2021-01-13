class VisitPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.role == 'admin' or user.role == 'manager'
        scope.all
      elsif user.role == 'patient'
        scope.where(patient_id: @user.try(:id))
      elsif user.role == 'doctor'
        scope.where(doctor_id: @user.try(:id))
      end
    end
  end

  def index?
    true
  end

  def show?
    is_admin_or_manager? or is_users_record?
  end

  def create?
    is_admin_or_manager? or is_users_record?
  end

  def new?
    true
  end

  # def update?
  #   true
  # end
  #
  # def edit?
  #   update?
  # end

  def destroy?
    is_admin_or_manager? or is_users_record?
  end

  def is_admin_or_manager?
    user.role == 'admin' or user.role == 'manager'
  end

  def is_users_record?
    record.patient_id == user.id or record.doctor_id == user.id
  end
end

