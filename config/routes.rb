Rails.application.routes.draw do
  resources :events
  resources :users, only: [:index]
  resources :subjects
  resources :periods
  resources :errs
  resources :schedules
  resources :locations
  resources :grades, only: %i[show index]
  resources :semsters
  resources :schools
  resources :teachers, only: [:index]

  resources :students, only: [:index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
