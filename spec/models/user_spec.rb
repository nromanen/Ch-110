require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validation test' do
    let(:user) { build(:user) }
    let(:doctor) { build(:user_doctor)}
    it 'ensure email presence' do
      user.email = nil
      expect(user.save).to eq(false)
    end

    it 'ensure email looks like valid' do
      user.email = 'newemail.com'
      expect(user.save).to eq(false)
    end

    it 'ensure email is unique' do
      user.email = 'user1@gmail.com'
      expect(user.save).to eq(false)
    end

    it 'ensure name presence' do
      user.name = nil
      expect(user.save).to eq(false)
    end

    it 'ensure surname presence' do
      user.surname = nil
      expect(user.save).to eq(false)
    end

    it 'ensure password presence' do
      user.password = nil
      expect(user.save).to eq(false)
    end

    it 'should save successfuly' do
      user.phone_number = nil
      expect(user.save).to eq(true)
    end

    it 'should have role: patient' do
      user.save
      expect(user.role).to eq('patient')
    end

    it 'should bee active' do
      user.save
      expect(user.is_active).to eq(true)
    end

    it 'should save doctor successfuly' do
      expect(doctor.save).to eq(true)
    end
  end
end
