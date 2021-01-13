class ApplicationRecord < ActiveRecord::Base
  include Pundit
  self.abstract_class = true
end
