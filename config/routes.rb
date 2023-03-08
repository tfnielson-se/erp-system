Rails.application.routes.draw do
  resources :users_projects
  resources :boms
  resources :pos
  resources :items
  resources :projects
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # CUSTOME ROUTES
  # get '/sessions', to: "sessions#index"
  post "/login", to: "sessions#create"
  # get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/authorized", to: "users#show"


end
