require 'rails_helper'

RSpec.describe "PatientProfiles", type: :request do

  describe "GET /new" do
    it "returns http success" do
      get "/patient_profile/new"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/patient_profile/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/patient_profile/edit"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/patient_profile/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/patient_profile/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/patient_profile/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
