require 'rails_helper'

RSpec.describe Visit, type: :model do
  context 'validation test' do
    let(:visit_type) { create(:visit_type) }
    let(:user) { create(:user) }
    let(:doctor) { create(:user_doctor)}
    let(:schedule) { create(:schedule, user: doctor, visit_type: visit_type) }
    let(:visit) { build(:visit, patient: user, doctor: doctor, visit_type: visit_type, created_by: user) }

    it 'should save successfuly' do
      schedule
      expect(visit.save!).to eq(true)
    end

    it 'ensure not save date out of schedule' do
      schedule
      visit.start_time = '2021-02-02 10:00:00'
      expect(visit.save).to eq(false)
    end

    it 'ensure not save time after schedule' do
      schedule
      visit.start_time = '2021-02-01 20:00:00'
      expect(visit.save).to eq(false)
    end

    it 'ensure not save time before schedule' do
      schedule
      visit.start_time = '2021-02-01 08:00:00'
      expect(visit.save).to eq(false)
    end

    # it 'ensure not save time in past' do
    #   schedule
    #   visit.start_time = '2021-01-25 10:00:00'
    #   expect(visit.save!).to eq(false)
    # end

    it 'ensure patient present' do
      schedule
      visit.patient = nil
      expect(visit.save).to eq(false)
    end

    it 'ensure doctor present' do
      schedule
      visit.doctor = nil
      expect(visit.save).to eq(false)
    end

    it 'ensure start time present' do
      schedule
      visit.start_time = nil
      expect(visit.save).to eq(false)
    end

    it 'ensure visit type present' do
      schedule
      visit.visit_type = nil
      expect(visit.save).to eq(false)
    end

  end
end