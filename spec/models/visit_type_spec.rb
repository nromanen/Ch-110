require 'rails_helper'

RSpec.describe VisitType, type: :model do
  context 'validation test' do
    let(:visit_type) { build(:visit_type) }
    it 'ensure name presence' do
      visit_type.name = nil
      expect(visit_type.save).to eq(false)
    end

    it 'ensure length presence' do
      visit_type.length = nil
      expect(visit_type.save).to eq(false)
    end

    it 'ensure length times 5' do
      visit_type.length = 31
      expect(visit_type.save).to eq(false)
    end

    it 'should save successfuly' do
      visit_type.description = nil
      expect(visit_type.save).to eq(true)
    end
  end
end
