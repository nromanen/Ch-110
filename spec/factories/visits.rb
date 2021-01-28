FactoryBot.define do
  factory :visit do
    patient { nil }
    doctor { nil }
    start_time { '2021-02-01 10:00:00' }
    visit_type { nil }
    created_by { nil }
  end
end