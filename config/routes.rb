Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :books, only: [:index, :create, :update, :destroy]
      resources :notes, only: [:index, :create, :update, :destroy]

      post "authenticate", to: "users#authenticate"
      get "profile", to: "users#profile"
    end
  end
end
