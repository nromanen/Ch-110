require 'rails_helper'

RSpec.describe "HelloReacts", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  it 'should render a React component' do
    visit root_path
    expect(page).to have_content('Hello React!')
  end
end
