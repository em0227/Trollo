
class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_crendentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            redirect_to api_user_url(@user)
            # render "api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 401
        end

    end

    def destroy
        logout!
        render "/"
    end
end