FactoryBot.define do
  factory :user do
    email {'user1@example.com'}
    password {'123456'}
    name {'Jack'}
    surname {'Nickson'}
    phone_number {'0950001122'}
    confirmed_at {'202012120000'}
  end

  factory :user_doctor, class: User do
    email {'userdoctor1@example.com'}
    password {'123456'}
    name {'Jayck'}
    surname {'Doc'}
    phone_number {'0958881122'}
    role { 2 }
    confirmed_at {'202012120000'}
  end

  # factory :random_user, class: User do
  #   email { Faker::Internet.safe_email }
  #   name { Faker::Name.name }
  #   surname { Faker::Name.surname }
  #   phone_number '0950001122'
  #   is_active true
  # end
end