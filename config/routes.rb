PetBnB::Application.routes.draw do
  root 'static_pages#index'

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create, :show]
end
