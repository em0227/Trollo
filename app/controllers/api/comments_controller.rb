class Api::CommentsController < ApplicationController
    # before_action :ensure_logged_in

    def index
        @card = Card.find_by(id: params[:card_id])
        # debugger
        @comments = @card.comments
    end

    def create
        @comment = Comment.new(comment_params)
        # @comment.author = User.find(1)
        @comment.author = current_user

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = current_user.comments.find_by(id: params[:id])
        # @comment = User.find(1).comments.find_by(id: params[:id])
        if @comment && @comment.update!(comment_params)
            render :show
        else
           render json: @comment.errors.full_messages, status: 404
        end 
    end

    def destroy
        # @comment = User.first.comments.find_by(id: params[:id])
        @comment = current_user.comments.find_by(id: params[:id])
        @comment.destroy
        render json: [@comment.id]
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :card_id)
    end
end