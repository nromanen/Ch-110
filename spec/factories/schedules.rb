FactoryBot.define do
  factory :schedule do
    user { nil }
    day { 'Monday' }
    start_time { '2000-01-01 09:00:00' }
    end_time { '2000-01-01 13:00:00' }
    visit_type { nil }
    start_date { '2021-01-01' }
    end_date { '2021-02-28' }
  end
end