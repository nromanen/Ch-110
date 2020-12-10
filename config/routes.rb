Rails.application.routes.draw do

  get 'patient_profile/new'
  get 'patient_profile/show'
  get 'patient_profile/edit'
  get 'patient_profile/create'
  get 'patient_profile/update'
  get 'patient_profile/destroy'
  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  # get 'info' => 'user#edit'
  root to: "home#index"
end
