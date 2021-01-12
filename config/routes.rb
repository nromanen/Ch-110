Rails.application.routes.draw do

  resources :doctor_profile
  resources :patient_profile
  get '/patients_profile_get_items' => 'patient_profile#get_items'

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  resources :visits, except: [:edit, :update]
  get '/slots' => 'visits#slots'
  resources :visit_types
  resources :schedules
  root to: "home#index"

  match '/admin/*path', to: 'admin#index', via: :all
  get '/users_to_react_form' => 'users#users_to_react_form'
  get '/users_by_id' => 'users#find_doctor_by_id'
end
