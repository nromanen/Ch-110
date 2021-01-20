require 'rails_helper'

RSpec.describe "HelloReacts", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  context 'should render a home_page' do
    before(:each) do
      visit root_path
    end

    scenario 'should display title' do
      expect(page).to have_title('MedManager')
    end
    scenario 'should display navbar' do
      expect(page).to have_css('header')
    end
    scenario 'should display nabar link Home' do
      expect(page).to have_content('Home')
    end
    scenario 'should display description' do
      expect(page).to have_content('HealthBook')
    end
    scenario 'should display \'CAN WE HELP YOU?\'' do
      expect(page).to have_content('CAN WE HELP YOU?')
    end
    scenario 'should display advertisement' do
      expect(page).to have_content('We have created a loyalty program that provides -10%')
    end
    scenario 'should display mail input' do
      expect(page).to have_field('tel')
    end
  end
end