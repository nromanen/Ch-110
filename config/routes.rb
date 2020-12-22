Rails.application.routes.draw do

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  resources :visits, except: [:edit, :update]
  resources :visit_types
  root to: "home#index"
end
