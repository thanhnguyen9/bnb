PetBnB::Application.routes.draw do
  root 'static_pages#index'

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create, :show]

  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:show]
    resources :images, only: [:create, :show]
    resources :reservations, only: [:create, :show]
    get '/search' => 'listings#search'
  end
end
