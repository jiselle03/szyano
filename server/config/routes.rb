Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
      resources :users, only: [:create] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]

      resources :products do
        resources :favorites, shallow: true, only: [:create, :destroy]
        get :favorited, on: :collection
      end

      resources :posts
    end
  end
end
