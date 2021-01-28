require 'rails_helper'
require_relative 'login_partial'


manager_email = 'manager@gmail.com'
manager_password = '123456'
user_email = 'user1@gmail.com'
password = '123456'
current_date = Time.new
year = current_date.year
month = current_date.month
date = current_date.day

for i in 1..30
  day = Time.new(year + 1, month, i)
  if day.monday?
    next_year_monday = day.day
    break
  end
end

RSpec.feature "Managers create schedule", type: :feature do
  background do
    visit '/users/sign_in?locale=en'
    login(manager_email, manager_password)
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
    click_link('Schedules')
    within(content) do
      click_link('New schedule', href: '/schedules/new?locale=en')
      select('Jackson Melissa', from: 'schedule_user_id')
      select('Monday', from: 'schedule_day')
      select('10', from: 'schedule_start_time_4i')
      select('00', from: 'schedule_start_time_5i')
      select('17', from: 'schedule_end_time_4i')
      select('00', from: 'schedule_end_time_5i')
      select(year + 1, from: 'schedule_start_date_1i')
      within '#schedule_start_date_2i' do
        find("option[value='1']").click
      end
      select('1', from: 'schedule_start_date_3i')
      select(year + 1, from: 'schedule_end_date_1i')
      within '#schedule_end_date_2i' do
        find("option[value='2']").click
      end
      select('1', from: 'schedule_end_date_3i')
      select('Consultation', from: 'schedule_visit_type_id')
      click_button 'Save schedule'
    end
    expect(page).to have_css('div.alert.alert-primary', text: 'Schedule was successfully created.')
  end

  scenario 'Click link Log out.' do
    click_link('Log Out')
    expect(page).to have_content('Signed out successfully.')
  end


end

RSpec.feature "Patient make a visit", type: :feature do
  background do
    visit root_path
    click_link('Log In')
    login(user_email, password)
    click_button('Departments')
    find_link('dentist').click
    click_link('Create visit', :href => '/visits/2/choose_date')
  end

  scenario 'should display doctors name and surname' do
    expect(page).to have_css('div.header__title.title', :text => 'Doctor: Melissa Jackson')
  end

  scenario 'click on calendar icon' do
    click_button(class: 'MuiButtonBase-root MuiIconButton-root')
    expect(page).to have_css('div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded')
  end

  context 'choose date in calendar' do
    background do
      click_button(class: 'MuiButtonBase-root MuiIconButton-root')
      difference = 12 - month
      for i in 0..difference
        find(:xpath, './/div[contains(@class, "MuiPickersSlideTransition-transitionContainer MuiPickersCalendarHeader-transitionContainer")]/following-sibling::button').click
      end
    end

    scenario 'click on calendar change month icon many times to january next year' do
      calendar = 'div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded'
      within (calendar) do
        expect(page).to have_css('p.MuiTypography-root.MuiTypography-body1.MuiTypography-alignCenter', text: 'January 2022')
      end
    end

    scenario 'click on the first monday' do
      calendar = 'div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded'
      within (calendar) do
        find_button("#{next_year_monday}").click
      end
      expect(page).to have_css('div.MuiPaper-root.MuiTableContainer-root.MuiPaper-elevation1.MuiPaper-rounded')
    end

    scenario 'click on the first tusday and fail' do
      calendar = 'div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded'
      within (calendar) do
        find_button("#{next_year_monday + 1}").click
      end
      expect(page).to have_css('h1', text: 'The doctor is not working this day')
    end

    scenario 'click on the first time slot' do
      find_button("#{next_year_monday}").click
      page.find(:css, '.MuiPopover-root').click
      click_button('10:20 - 10:40')
      expect(page).to have_css('h2', text: 'Appointment')
    end

    scenario 'confirm modal' do
      find_button("#{next_year_monday}").click
      page.find(:css, '.MuiPopover-root').click
      click_button('10:20 - 10:40')
      click_button('Confirm')
      expect(page).to have_content('Your visit 10:20 was saved!')
    end
  end
end
