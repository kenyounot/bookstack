Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :books, only: [:index, :create, :update, :destroy]
      resources :notes, only: [:create, :update, :destroy]

      get "notes/:id", to: "notes#index"
      post "authenticate", to: "users#authenticate"
      get "profile", to: "users#profile"
    end
  end

  get "*path", to: "application#fallback_index_html", constraints: ->(request) do
                 !request.xhr? && request.format.html?
               end
end
