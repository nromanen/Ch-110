class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.role == 'admin'
        scope.all
      end
    end
  end

  def index?
    user.role == 'admin'
  end

  def show?
    is_users_record?
  end

  def users_to_react_form?
    user.role == 'admin'
  end

  def manage?
    is_admin_or_manager?
  end

  def find_doctor_by_id?
    true
  end

  def get_patients?
    is_admin_or_manager?
  end

  def get_doctors?
    is_admin_or_manager?
  end

  def is_admin_or_manager?
    user.role == 'admin' or user.role == 'manager'
  end

  def is_users_record?
    record.id == user.id
  end
end


