require 'rails_helper'

RSpec.feature "Register page content", type: :feature do

  form = 'form#new_user'

  background do
    visit '/users/sign_up?locale=en'
  end

  context 'Within (register form):' do

    scenario 'Should display Sign Up:' do
      within(form) do
        expect(page).to have_css('h2', text: 'Sign Up')
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

    scenario 'Displayed Textbox: Password confirmation' do
      within(form) do
        expect(page).to have_field('user[password_confirmation]')
      end
    end

    scenario 'Displayed Textbox: Name' do
      within(form) do
        expect(page).to have_field('user[name]')
      end
    end

    scenario 'Displayed Textbox: Surname' do
      within(form) do
        expect(page).to have_field('user[surname]')
      end
    end

    scenario 'Displayed Textbox: Phone' do
      within(form) do
        expect(page).to have_field('user[phone_number]')
      end
    end

    scenario 'Displayed Button: Sign up' do
      within(form) do
        expect(page).to have_button('commit')
      end
    end

    scenario 'Displayed Textbox: Forgot your password' do
      expect(page).to have_link('Didn\'t receive confirmation instructions?')
    end
  end
end



RSpec.feature 'Fill in with valid credentials' do

  before(:all) do
    visit '/users/sign_up?locale=en'
    signup('2Bob@gmail.com',
           '111111',
           '111111',
           'Bob',
           'Presly',
           '123456789'
    )
  end

  scenario 'Good credentials: display notice: Signed up successfully.' do
    message = 'A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.'
    expect(page).to have_css('div.alert.alert-primary', text: message) #Is message in alertbox?
  end
end


def signup(user_email, password, password_confirmation, name, surname, phone)
  fill_in('user[email]', with: user_email)
  fill_in('user[password]', with: password)
  fill_in('user[password_confirmation]', with: password_confirmation)
  fill_in('user[name]', with: name)
  fill_in('user[surname]', with: surname)
  fill_in('user[phone_number]', with: phone)
  click_button('Sign Up')
end
