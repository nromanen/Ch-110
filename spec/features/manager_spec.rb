require 'rails_helper'
require_relative 'login_partial'


user_email = 'manager@gmail.com'
password = '123456'
current_date = Time.new
year = current_date.year
month = current_date.month
date = current_date.day


RSpec.feature "Managers create schedule", type: :feature do
  background do
    visit '/users/sign_in?locale=en'
    login(user_email, password)
  end

  scenario 'Good credentials: display notice: Signed in successfully.' do
    message = 'Signed in successfully.'
    expect(page).to have_css('div.alert.alert-primary', text: message)
  end

  scenario 'Should display Side bar:' do
    expect(page).to have_css('div.sidebar')
  end

  scenario 'Should display Side bar:' do
    expect(page).to have_link('Schedules')
  end

  scenario 'Create schedule for monday:' do
    content = 'div.content'
    # find_link('Schedules').click
    click_link('Schedules')

    within(content) do
      click_link('New Schedule', href: '/schedules/new?locale=en')
      select('Jackson Melissa', from: 'schedule_user_id')
      select('Monday', from: 'schedule_day')
      select('10', from: 'schedule_start_time_4i')
      select('00', from: 'schedule_start_time_5i')
      select('17', from: 'schedule_end_time_4i')
      select('00', from: 'schedule_end_time_5i')
      select(year + 1, from: 'schedule_start_date_1i')
      # select(month, from: 'schedule_start_date_2i')
      within '#schedule_start_date_2i' do
        find("option[value='#{month}']").click
      end
      select(date, from: 'schedule_start_date_3i')
      select(year + 1, from: 'schedule_end_date_1i')
      # select(month + 1, from: 'schedule_end_date_2i')
      within '#schedule_end_date_2i' do
        find("option[value='#{month + 1}']").click
      end
      select(date, from: 'schedule_end_date_3i')
      select('Consultation - 20', from: 'schedule_visit_type_id')
      click_button 'Create Schedule'
    end
    # expect(page).to have_css('div.alert.alert-primary', text: 'Schedule was successfully created.')
  end

end
