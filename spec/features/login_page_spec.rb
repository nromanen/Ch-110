require 'rails_helper'
require_relative 'login_partial'

user_email = 'user1@gmail.com'
password = '123456'

RSpec.feature "Login page content", type: :feature do

  form = 'form'

  background do
    visit '/users/sign_in?locale=en'
  end

  context 'Within (Login form):' do

    scenario 'Should display Log In:' do
      within(form) do
        expect(page).to have_css('h2', text: 'Log In')
      end
    end

    scenario 'Displayed Textbox: Email' do
      within(form) do
        expect(page).to have_field('user[email]')
      end
    end

    scenario 'Displayed Textbox: Password' do
      within(form) do
        expect(page).to have_field('user[password]')
      end
    end

    scenario 'Displayed Button: Login' do
      within(form) do
        expect(page).to have_button('commit')
      end
    end

    scenario 'Displayed checkbox: Remember me' do
      expect(page).to have_content('Remember me')
    end

    scenario 'Displayed Textbox: Forgot your password' do
      expect(page).to have_link('Forgot your password?')
    end
  end
end

RSpec.feature 'Login Page: Invalid Credentials Display Alert to User' do

  background do
    visit '/users/sign_in?locale=en'
    login('Tom@gmail.com', 'wrong_password')
  end

  scenario 'Wrong Email: Invalid Email or password.' do
    error_message = 'Invalid Email or password.'
    expect(page).to have_content(error_message)
  end

  scenario 'Wrong_password: Your password is invalid!' do
    error_message = 'Invalid Email or password.'
    expect(page).to have_css('div.alert.alert-danger', text: error_message)
  end
end

RSpec.feature 'Fill in with valid credentials' do
  future_disabled_user = 'user2@gmail.com'
  background do
    visit '/users/sign_in?locale=en'
    login(future_disabled_user, password)
  end

  scenario 'Good credentials: display notice: Signed in successfully.' do
    message = 'Signed in successfully.'
    expect(page).to have_css('div.alert.alert-primary', text: message)
  end

  scenario 'Good credentials: display link Log out.' do
    expect(page).to have_link('Log Out', href: '/users/sign_out?locale=en')
  end

  scenario 'Can visit own cabinet' do
    click_link('Jimm Klarck')
    expect(page).to have_css('p', text: '380971225344')
  end

  scenario 'Can visit own cabinet' do
    click_link('Jimm Klarck')
    click_link('My visits')
    expect(page).to have_css('h2', text: 'Visits:')
  end

  scenario 'Can\'t delete visit in past'  do
    click_link('Jimm Klarck')
    click_link('My visits')
    find_button('Cancel visit', id: '4').click
    expect(page).to have_content('Visit can\'t be canceled: Less 60 than minutes left to an appointment.')
  end

  scenario 'Can delete own account' do
    click_link('Jimm Klarck')
    click_link('Edit account')

    message = accept_confirm do
      click_link('I want to delete my account', href: '/users?locale=en')
    end
    expect(message).to eq('Are you sure?')
    expect(page).to have_content('Your account was successfully deleted.')
  end
end

feature 'Secure Area: User Can Logout' do
  background do
    visit '/users/sign_in?locale=en'
    login(user_email, password)
  end

  scenario 'Select Logout Button: Login Page with Signed out successfully.' do
    info_message = 'Signed out successfully.'
    find_link('Log Out').click
    expect(page).to have_css('div.alert.alert-primary', text: info_message)
    expect(page).to have_link('Log In', :href=> '/users/sign_in?locale=en')
  end
end
