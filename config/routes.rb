Rails.application.routes.draw do

  resources :doctor_profile
  resources :patient_profile

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  root to: "home#index"
end
