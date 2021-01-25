def login(user_email, password)
  fill_in('user[email]', with: user_email)
  fill_in('user[password]', with: password)
  click_button('Log In')
end