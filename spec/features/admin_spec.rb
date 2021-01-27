require 'rails_helper'
require_relative 'login_partial'


admin_email = 'admin@admin.com'
admin_password = 'admin1'
user_email = 'user1@gmail.com'
password = '123456'

RSpec.feature "Admin log in: ", type: :feature do
  background do
    visit '/users/sign_in?locale=en'
    login(admin_email, admin_password)
  end

  scenario 'Good credentials: display notice: Signed in successfully.' do
    message = 'Signed in successfully.'
    expect(page).to have_css('div.alert.alert-primary', text: message)
  end

  scenario 'Should display my account: Admin Admin:' do
    expect(page).to have_link('Admin Admin')
  end

  scenario 'Enter Admin dashboard:' do
    click_link 'Admin Admin'
    expect(page).to have_css('p', text: 'Email: admin@admin.com')
    expect(page).to have_css('p', text: 'Phone number: 000000000000')
    expect(page).to have_link('Dashboard')
    expect(page).to have_link('Patient profile')
  end

  scenario 'Click link Admin' do
    click_link 'Admin Admin'
    click_link('Dashboard')
    expect(page).to have_css('h3', text: 'Menu:')
  end
end


RSpec.feature "Admin do some actions with patients profile:  ", type: :feature do
  background do
    visit '/users/sign_in?locale=en'
    login(admin_email, admin_password)
    click_link 'Admin Admin'
    click_link('Dashboard')
    click_link(href: '/admin/users')
  end

  scenario 'Show Users table' do
    expect(page).to have_css('table.MuiTable-root.makeStyles-table-1')
    expect(page).to have_css('th.MuiTableCell-root.MuiTableCell-body')
  end

  scenario 'click delete users profile and see: Are you sure?' do
    click_link(href: '/admin/patient_profile/delete/1')
    expect(page).to have_css('h1', text: 'Are you sure?')
    expect(page).to have_css('h3', text: 'User email: user1@gmail.com')
  end

  scenario 'Confirm deletion users profile' do
    click_link(href: '/admin/patient_profile/delete/1')
    click_button('Delete')
    expect(page).to have_link(href: '/admin/patient_profile/add')
  end

  scenario 'Admin create users profile' do
    form = 'form'
    click_link(href: '/admin/patient_profiles')
    click_link(href: '/admin/patient_profile/add')
    within(form) do
      select('user1@gmail.com', from: 'user_id')
      fill_in('height', with: '180')
      fill_in('weight', with: '80')
      fill_in('allergies', with: 'Sea product')
      check('isInsured')
      select('A', from: 'blood_type')
      click_button('Create profile')
    end
    expect(page).to have_content('Patient profiles:')
    expect(page).to have_css('td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignRight', text: '180')
  end
end

