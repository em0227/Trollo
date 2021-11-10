Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update, :index] do 
      resources :boards, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :boards, only: [:show, :create, :update, :destroy] do 
      resources :lists, only: [:index]
      resources :cards, only: [:index]
      member do 
        post :share, to: 'boards#share', as: 'share'
        delete :unshare, to: 'boards#unshare', as: 'unshare'
      end
    end

    resources :lists, only: [:create, :update, :destroy]

    resources :cards, only: [:show, :create, :update, :destroy] do
      resources :attachments, only: [:destroy]
      member do 
        post :share, to: 'cards#share', as: 'share'
        delete :unshare, to: 'cards#unshare', as: 'unshare'
      end
    end
    
  end

end
