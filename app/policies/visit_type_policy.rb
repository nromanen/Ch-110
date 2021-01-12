class VisitTypePolicy < ApplicationPolicy
  def index?
    is_admin_or_manager?
  end

  def show?
    is_admin_or_manager?
  end

  def create?
    is_admin_or_manager?
  end

  def new?
    create?
  end

  def update?
    is_admin_or_manager?
  end

  def edit?
    update?
  end

  def destroy?
    is_admin_or_manager?
  end

  private
  def is_admin_or_manager?
    user.role == 'admin' or user.role == 'manager'
  end
end