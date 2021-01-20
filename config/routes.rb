Rails.application.routes.draw do

  resources :doctor_profile do
    collection do
      get 'show_spec'
    end
  end
  resources :patient_profile
 

  get '/patients_profile_get_items' => 'patient_profile#get_items'
  get 'departments' => 'doctor_profile#departments'

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}

  get 'account' => 'users#show'
  
  resources :visits, except: [:edit, :update]
  get '/slots' => 'visits#slots'
  get '/manager' => 'users#manage'
  get '/manager/patients' => 'users#get_patients'
  get '/manager/doctors' => 'users#get_doctors'
  get '/users' => 'users#index'
  resources :visit_types
  resources :schedules
  root to: "home#index"

  match '/admin/*path', to: 'admin#index', via: :all
  get '/users_to_react_form' => 'users#users_to_react_form'
  post 'send_tel' => 'home#send_numb'
  get '/users_by_id' => 'users#find_doctor_by_id'
  get 'choose_date' => 'visits#choose_date'

  post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'
end
