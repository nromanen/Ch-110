require 'rails_helper'
require_relative 'login_partial'

RSpec.feature "Visit Departments page when you are not logged in", type: :feature do

  background do
    visit root_path
    click_button('Departments')
    find_link('dentist').click
  end

  scenario 'Find and click Link: Departments/dentist ==> Navigate to doctor cards' do
    expect(page).to have_current_path("/doctor_profile/show_spec?locale=en&position=0")
  end

  scenario 'should display image' do
    expect(page).to have_css('img', class: "img_responsive")
  end

  scenario 'should display description' do
    expect(page).to have_content('I am the best doctor ever been in the world!')
    expect(page).to have_css('p.description', text: 'I am the best doctor ever been in the world!')
  end

  scenario 'should display Melissa Jackson' do
    expect(page).to have_css('h2', text: 'Melissa Jackson')
  end

  scenario 'should display Bruno Senna' do
    expect(page).to have_css('h2', text: 'Bruno Senna')
  end

  scenario 'should display dentist' do
    expect(page).to have_css('p', text: 'dentist')
  end

  scenario 'should display Create visit button' do
    expect(page).to have_link('Create visit', :href => '/visits/3/choose_date')
  end

  scenario 'should display warning: You need to sign in or sign up before continuing.' do
    click_link('Create visit', :href => '/visits/2/choose_date')
    expect(page).to have_css('div.alert.alert-danger', :text => 'You need to sign in or sign up before continuing.')
  end
end

user_email = 'user1@gmail.com'
password = '123456'


RSpec.feature 'Press the button \'Create\' a visit when you are logged in', type: :feature do
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

  scenario 'should have_current_path' do
    expect(page).to have_current_path('/visits/2/choose_date')
  end
end