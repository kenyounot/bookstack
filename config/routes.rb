Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :books, only: [:index, :create]

      post "authenticate", to: "users#authenticate"
      get "profile", to: "users#profile"
    end
  end
end
