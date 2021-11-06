Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update] do 
      resources :boards, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :create, :update, :destroy] do 
      resources :lists, only: [:index]
    end

    resources :lists, only: [:create, :update, :destroy] do 
      resources :cards, only: [:index]
    end
    resources :cards, only: [:show, :create, :update, :destroy]
  end

end
