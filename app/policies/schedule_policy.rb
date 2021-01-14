class SchedulePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.role == 'admin' or user.role == 'manager'
        scope.all
      else
        scope.where(user_id: @user.try(:id))
      end
    end
  end

  def index?
    is_admin_or_manager? or user.role == 'doctor'
  end

  def show?
    is_admin_or_manager? or is_users_record?
  end

  def create?
    is_admin_or_manager? or is_users_record?
  end

  def new?
    is_admin_or_manager? or user.role == 'doctor'
  end

  def update?
    is_not_patient?
  end

  def edit?
    update?
  end

  def destroy?
    is_not_patient?
  end

  def is_admin_or_manager?
    user.role == 'admin' or user.role == 'manager'
  end

  def is_users_record?
    user.role == 'doctor' and record.user_id == user.id
  end
end
