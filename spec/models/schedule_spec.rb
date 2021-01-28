require 'rails_helper'

RSpec.describe Schedule, type: :model do
  context 'validation test' do
    let(:visit_type) { create(:visit_type) }
    let(:user) { create(:user) }
    let(:doctor) { create(:user_doctor)}
    let(:schedule) { build(:schedule, user: doctor, visit_type: visit_type) }
    
    it 'should save successfuly' do
      expect(schedule.save).to eq(true)
    end

    it 'ensure user is present' do
      schedule.user = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure day is present' do
      schedule.day = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure start time is present' do
      schedule.start_time = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure end time is present' do
      schedule.end_time = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure start date is present' do
      schedule.start_date = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure end date is present' do
      schedule.end_date = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure visit type is present' do
      schedule.visit_type = nil
      expect(schedule.save).to eq(false)
    end

    it 'ensure user is doctor' do
      schedule.user = user
      expect(schedule.save).to eq(false)
    end

    it 'ensure schedule with free date' do
      schedule.save
      schedule.start_date = '2021-01-01'
      expect(schedule.save).to eq(false)
    end

    it 'ensure schedule not in past' do
      schedule.start_date = '2020-01-01'
      schedule.end_date = '2020-01-10'
      expect(schedule.save).to eq(false)
    end

    it 'ensure schedule duration not less than 1 day' do
      schedule.start_date = '2020-01-01'
      schedule.end_date = '2020-01-01'
      expect(schedule.save).to eq(false)
    end

    it 'ensure work hours duration not less than 1 hour' do
      schedule.start_time = '2000-01-01 13:00:00'
      schedule.end_time = '2000-01-01 13:50:00'
      expect(schedule.save).to eq(false)
    end

    it 'ensure work hours are valid' do
      schedule.start_time = '2000-01-01 14:00:00'
      schedule.end_time = '2000-01-01 12:00:00'
      expect(schedule.save).to eq(false)
    end

    it 'should delete successfuly' do
      schedule.save
      expect(schedule.delete).to eq(schedule)
    end

    it 'should update successfuly' do
      schedule.save
      schedule.day = 'Sunday'
      expect(schedule.save).to eq(true)
    end
  end
end
