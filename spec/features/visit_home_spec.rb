require 'rails_helper'

RSpec.feature "Visit Home Page", type: :feature do

  background do
    visit root_path
  end

  scenario 'should display title' do
    expect(page).to have_title('MedManager')
  end

  scenario 'should display navbar' do
    expect(page).to have_css('header')
  end

  scenario 'should display nabar link Home' do
    expect(page).to have_link('Home', :href => '/')
  end

  scenario 'Click Link: Home ==> Navigate to /' do
    click_link('Home')
    expect(page).to have_current_path("/")
  end

  scenario 'should display nabar link News' do
    expect(page).to have_link('News', :href => '#news')
  end

  scenario 'Click Link: /News ==> Navigate to /#news' do
    click_link('News')
    expect(page).to have_current_path('/')
  end

  scenario 'should display nabar link Contacts' do
    expect(page).to have_link('Contacts', :href => '#contact')
  end

  scenario 'Click Link: /Contacts ==> Navigate to /#contact' do
    click_link('Contacts')
    expect(page).to have_current_path('/')
  end

  scenario 'should display nabar dropdown Departments' do
    expect(page).to have_css('div button', :text => 'Departments')
  end

  scenario 'should display nabar dropdown EN' do
    expect(page).to have_css('div button', :text => 'EN')
  end

  scenario 'should display description' do
    expect(page).to have_content('HealthBook')
    expect(page).to have_css('h1 a', text: 'HealthBook')
  end

  scenario 'should display \'CAN WE HELP YOU?\'' do
    expect(page).to have_css('p', text: 'CAN WE HELP YOU?')
  end

  scenario 'should display advertisement' do
    expect(page).to have_css('h4', text: 'We have created a loyalty program that provides -10%')
  end

  scenario 'should display image' do
    expect(page).to have_css('img', class: "img_discount")
  end

  scenario 'should display mail input' do
    expect(page).to have_field('tel')
  end



  scenario 'Current URL: http://localhost:3000/' do
    expect(page).to have_current_path('/')
  end

  scenario 'Verify Link Exists: Sign In' do
    expect(page).to have_link('Log In', :href=> '/users/sign_in?locale=en')
  end

  scenario 'Verify Link Exists: Sign Up' do
    expect(page).to have_link('Sign Up', :href=> '/users/sign_up?locale=en')
  end

  scenario 'Click Link: Login ==> Navigate to /login' do
    click_link("Log In")
    expect(page).to have_current_path('/users/sign_in?locale=en')
  end

  scenario 'Click Link: Sign Up ==> Navigate to /sign_Up' do
    click_link('Sign Up')
    expect(page).to have_current_path('/users/sign_up?locale=en')
  end

end
