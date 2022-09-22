Rails.application.routes.draw do
  root 'newscasts#index'

  devise_for :admins, controllers: {
    sessions: 'admins/sessions',
    registrations: 'admins/registrations'
  }

  namespace :admin_user do
    resources :newscasts
  end

  resources :newscasts, only: %i[index show]

  get '*path', to: 'newscasts#index', via: :all

  # get '*path', to: redirect('/'), constraints: lambda { |req|
  #   req.path.exclude? 'rails/active_storage'
  # }
end
