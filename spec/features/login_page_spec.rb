require 'rails_helper'

RSpec.feature "Login page content", type: :feature do

  form = 'form#new_user'

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
    expect(page).to have_content(error_message) #Is message on page?
  end

  scenario 'Wrong_password: Your password is invalid!' do
    error_message = 'Invalid Email or password.'
    expect(page).to have_css('div.alert.alert-danger', text: error_message) #Is message in alertbox?
  end
end

RSpec.feature 'Fill in with valid credentials' do

  background do
    visit '/users/sign_in?locale=en'
    login('user1@gmail.com', '123456')
  end

  scenario 'Good credentials: display notice: Signed in successfully.' do
    message = 'Signed in successfully.'
    expect(page).to have_css('div.alert.alert-primary', text: message) #Is message in alertbox?
  end

  scenario 'Good credentials: display link Log out.' do
    expect(page).to have_link('Log Out', href: '/users/sign_out?locale=en') #Is message in alertbox?
  end
end

feature 'Secure Area: User Can Logout' do
  background do
    visit '/users/sign_in?locale=en'
    login('user1@gmail.com', '123456')
  end

  scenario 'Select Logout Button: Login Page with Info Message' do
    info_message = 'Signed out successfully.'
    find_link('Log Out').click
    expect(page).to have_css('div.alert.alert-primary', text: info_message)
    expect(page).to have_link('Log In', :href=> '/users/sign_in?locale=en')
  end
end


def login(user_email, password)
  fill_in('user[email]', with: user_email)
  fill_in('user[password]', with: password)
  click_button('Log In')
end