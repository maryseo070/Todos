Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api do
    resources :todos, only: [:show, :index, :create, :update, :destroy], defaults: {format: :json}
  end
end
