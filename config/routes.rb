Rails.application.routes.draw do
  resources :admins, only: %i[ index show create destroy ]
  resources :events, only: %i[index create destroy]
  resources :users, only: %i[index show create]
  resources :subjects, only: %i[index show create]
  resources :periods, only: %i[index show]
  resources :errs, only: %i[index show]
  resources :schedules, only: %i[index show create destroy]
  resources :locations, only: %i[index show]
  resources :grades, only: %i[index show]
  # resources :semsters, only: %i[index show]
  resources :schools, only: %i[index show]
  resources :teachers, only: [:index]
  resources :students, only: %i[index show update]

  #admin route
  
  post '/teacher/:id/register', to: 'admins#create_teacher'
  post '/student/:id/register', to: 'admins#create_student'
  patch '/teacher/:id/update', to: 'admins#set_teacher'
  patch '/student/:id/update', to: 'admins#set_student'

  #user route
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'

  #session routes for login / logout
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

  #events routes
    post '/events', to: 'events#create'
    delete '/events', to: 'events#destroy'

  #Grades Routes
    get '/grades', to: 'grades#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #FALLBACK ROUTE FOR DEPLOYMENT
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
