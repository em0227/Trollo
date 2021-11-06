class Api::ListsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @board = Board.find_by(id: params[:board_id])
        # debugger
        @lists = @board.lists
    end

    def create
        @list = List.new(list_params)
        # @list.author = User.find(1)
        @list.author = current_user

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def update
        @list = current_user.lists.find_by(id: params[:id])
        # @list = User.find(1).lists.find_by(id: params[:id])
        if @list && @list.update!(list_params)
            render :show
        else
           render json: @list.errors.full_messages, status: 404
        end 
    end

    def destroy
        # @list = User.first.lists.find_by(id: params[:id])
        @list = current_user.lists.find_by(id: params[:id])
        @list.destroy
        render json: [@list.id]
    end

    private

    def list_params
        params.require(:list).permit(:title, :board_id)
    end
end