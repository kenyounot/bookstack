Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'books/index'
      get 'books/create'
      get 'books/update'
      get 'books/delete'
    end
  end
  get 'book/index'
  get 'book/create'
  get 'book/update'
  get 'book/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post "authenticate", to: "users#authenticate"
      get "profile", to: "users#profile"
    end
  end
end
