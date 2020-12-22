Rails.application.routes.draw do

  resources :doctor_profile
  resources :patient_profile
  get '/patients_profile_get_items' => 'patient_profile#get_items'

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  root to: "home#index"

  match '/admin/*path', to: 'admin#index', via: :all
  get '/users_to_react_form' => 'users#users_to_react_form'
end
