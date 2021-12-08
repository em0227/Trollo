class Api::BoardsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @user = User.find_by(id: params[:user_id])
        # debugger
        @boards = @user.boards
    end

    def show
        @board = current_user.boards.find_by(id: params[:id]) 
        # @board = Board.find_by(id: params[:id])
    end

    def create
        @board = Board.new(board_params)
        # debugger
        @board.author = current_user
        # @board.author = User.first
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        # @board = Board.find(params[:id])
        @board = current_user.boards.find_by(id: params[:id])
        if @board && @board.update!(board_params)
            render :show
        else
           render json: @board.errors.full_messages, status: 404
        end 
    end

    def destroy
        # @board = Board.find(params[:id])
        @board = current_user.boards.find_by(id: params[:id])
        @board.destroy
        render json: [@board.id]
    end

    def share
        # co_worker = User.find_by(id: params[:co_worker_id])
        @board = Board.find_by(id: params[:id])
        share = Share.create(user_id: params[:co_worker_id], shareable_id: params[:id], shareable_type: 'Board')
        if share.save
            render :show
        else
            render json: share.errors.full_messages, status: :unprocessable_entity
        end
    end

    def unshare
        @board = Board.find_by(id: params[:id])
        share = @board.shares.find_by(user_id: params[:co_worker_id])
        if share.destroy
            render :show
        else
            render json: share.errors.full_messages, status: :unprocessable_entity
        end
    end


    private

    def board_params
        params.require(:board).permit(:title, :bg_color, :bg_photo, photo: [])
    end
end