Rails.application.routes.draw do
  resources :users_projects, only: [ :index, :show, :create, :update, :destroy]
  resources :boms, only: [ :index, :show, :create, :update, :destroy]
  resources :pos, only: [ :index, :show, :create, :update, :destroy]
  resources :items, only: [ :index, :show, :create, :update, :destroy]
  resources :projects, only: [ :index, :show, :create, :update, :destroy]
  resources :users, only: [ :index, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # CUSTOME ROUTES
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized", to: "users#show"


end
