Rails.application.routes.draw do

  devise_for :users, controllers: { registrations: 'user/registrations',
                                    sessions: 'user/sessions',
                                    passwords: 'user/passwords',
                                    confirmations: 'user/confirmations'}
  get 'account' => 'users#show'
  # get 'info' => 'user#edit'
  root to: "home#index"
end
