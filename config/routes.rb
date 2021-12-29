Rails.application.routes.draw do
  resources :events
  resources :users , only:[:index]
  resources :subjects
  resources :periods
  resources :errs
  resources :schedules
  resources :locations
  resources :grades, only:[:show,:index]
  resources :semsters
  resources :schools
  resources :students, only: [:index]
  resources :teachers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
