require 'rails_helper'
require_relative 'login_partial'

user_email = 'user1@gmail.com'
password = '123456'

feature 'Visit choose date page' do
  background do
    visit '/users/sign_in?locale=en'
    login(user_email, password)
    click_button('Departments')
    find_link('dentist').click
    click_link('Create visit', :href => '/visits/2/choose_date')
  end

  scenario 'should display doctors name and surname' do
    expect(page).to have_css('div.header__title.title', :text => 'Doctor: Melissa Jackson')
  end

  scenario 'should display doctors Specialization' do
    expect(page).to have_css('span', :text => 'Specialization: dentist')
  end

  scenario 'should display doctors Description' do
    expect(page).to have_css('span', :text => 'Description: I am the best doctor ever been in the world!')
  end

  scenario 'should display calendar' do
    expect(page).to have_css('div.MuiFormControl-root.MuiTextField-root.MuiFormControl-marginNormal')
  end

  scenario 'should display calendar icon' do
    expect(page).to have_css('svg.MuiSvgIcon-root')
  end
end



# RSpec.feature 'Create a visit when you are loggged in', type: :feature do
#   background do
#     visit root_path
#     click_link('Log In')
#     login(user_email, password)
#     click_button('Departments')
#     find_link('dentist').click
#     click_link('Create visit', :href => '/visits/2/choose_date')
#   end
#
#   scenario 'should display doctors name and surname' do
#     expect(page).to have_css('div.header__title.title', :text => 'Doctor: Melissa Jackson')
#   end
#
#   scenario 'should have_current_path' do
#     expect(page).to have_current_path('/visits/2/choose_date')
#   end
# end

