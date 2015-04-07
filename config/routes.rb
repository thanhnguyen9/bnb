PetBnB::Application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
  end
end
