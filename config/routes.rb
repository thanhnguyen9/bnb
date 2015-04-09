PetBnB::Application.routes.draw do
  root 'static_pages#index'

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create, :show]

  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:show]
    post '/search' => 'listings#search'
    resources :images, only: [:create]
  end
end
