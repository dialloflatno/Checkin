Rails.application.routes.draw do
  resources :events, only: %i[index create]
  resources :users, only: %i[index show create]
  resources :subjects
  resources :periods
  resources :errs
  resources :schedules
  resources :locations
  resources :grades, only: %i[index show]
  resources :semsters
  resources :schools
  resources :teachers, only: [:index]

  resources :students, only: %i[index show update]

  #session routes for login / logout
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #user route
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  #events routes
  post '/events', to: 'events#create'

  get '/grades', to: 'grades#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
