class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :update, :index]

    def index
        if filter
            # byebug
            @users = User.matched_users(filter)
            
        else
            @users = User.all
            render :index
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update!(user_params)
            render :show
        else
           render json: @user.errors.full_messages, status: 404
        end 
    end

    private

    def user_params
        params.require(:user).permit(:email, :name, :password)
    end

    def filter
        params[:filter]
    end
end