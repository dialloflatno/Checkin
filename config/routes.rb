Rails.application.routes.draw do
  namespace :api do
    resources :events, only: %i[index create]
    resources :users, only: %i[index show create]
    resources :subjects, only: %i[index show create]
    resources :periods
    resources :errs
    resources :schedules, only: %i[index show create]
    resources :locations
    resources :grades, only: %i[index show]
    resources :semsters
    resources :schools
    resources :teachers, only: [:index]

    resources :students, only: %i[index show update]

    #user route
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'

    #session routes for login / logout
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    #events routes
    post '/events', to: 'events#create'

    get '/grades', to: 'grades#show'

    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"

    #FALLBACK ROUTE FOR DEPLOYMENT
    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
