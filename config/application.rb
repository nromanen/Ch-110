require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MedManager
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.generators do |g|
      g.test_framework :rspec
    end

    config.i18n.available_locales = [:en, :ru, :uk]
    config.i18n.default_locale = :en
    config.middleware.use I18n::JS::Middleware

    config.middleware.use I18n::JS::Middleware
  end
end
