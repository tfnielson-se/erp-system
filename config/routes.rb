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

  get '/sessions', to: "sessions#index"

end
