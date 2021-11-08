class Api::CardsController < ApplicationController
    # before_action :ensure_logged_in

    def index
        @board = Board.find_by(id: params[:board_id])
        # debugger
        @cards = @board.cards
    end

    def create
        @card = Card.new(card_params)
        # @card.author = User.find(1)
        @card.author = current_user

        if @card.save
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])
        # @card = User.find(1).cards.find_by(id: params[:id])
        # debugger
        if @card && @card.update!(card_params)
            if params[:images] 
                @card.images.attach(params[:images])
                @card.update!
            end
            render :show
        else
           render json: @card.errors.full_messages, status: 404
        end 
    end

    def destroy
        # @card = User.first.cards.find_by(id: params[:id])
        @card = current_user.cards.find_by(id: params[:id])
        @card.destroy
        render json: [@card.id]
    end

    private

    def card_params
        params.require(:card).permit(:title, :description, :list_id, images: [])
    end
end