Rails.application.routes.draw do
  devise_for :admins, controllers: {
    sessions: 'admins/sessions',
    registrations: 'admins/registrations'
  }

  root 'newscasts#index'

  namespace :admin_user do
    # root 'admin_user/newscasts#index'

    resources :newscasts
  end

  resources :newscasts, only: %i[index show]

  match '*path', to: 'newscasts#index', via: :all
end
