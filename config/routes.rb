Rails.application.routes.draw do

  controller :patient_profile do
    get 'patient_profile' => :index
    get 'patient_profile/new' => :new
    get 'patient_profile/show' => :show
    get 'patient_profile/edit' => :edit
    post 'patient_profile/create' => :create
    patch 'patient_profile/update' => :update
    delete 'patient_profile/destroy' => :destroy
  end

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  # get 'info' => 'user#edit'
  root to: "home#index"
end
