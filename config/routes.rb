Rails.application.routes.draw do
  
  root to: "home#index"
  resources :doctor_profile do
    collection do
      get 'show_spec'
    end
  end
  resources :patient_profile




  resources :doctor_profile do
    collection do
      get 'show_spec'
    end
  end

  resources :patient_profile do
    collection do
      get 'get_items'
    end
  end

  resources :visit_types
  resources :schedules

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  resources :visits, except: [:edit, :update] do
    member do
      get 'choose_date'
    end
  end

  match '/admin/*path', to: 'admin#index', via: :all


  get 'account' => 'users#show'
  get '/slots' => 'visits#slots'
  get '/manager' => 'users#manage'
  get '/manager/patients' => 'users#get_patients'
  get '/manager/doctors' => 'users#get_doctors'
  get '/users' => 'users#index'
  get '/users_to_react_form' => 'users#users_to_react_form'
  post 'send_tel' => 'home#send_numb'
  get '/users_by_id' => 'users#find_doctor_by_id'
  get 'choose_date' => 'visits#choose_date'
  post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'
  get 'departments' => 'doctor_profile#departments'
end
