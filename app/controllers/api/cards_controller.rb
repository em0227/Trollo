class Api::CardsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @board = Board.find_by(id: params[:board_id])
        # debugger
        @cards = @board.cards
    end

    def show
        @card = Card.find(params[:id])
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
        if params[:card][:predecessor_id]
            @card.change_order(params[:card][:predecessor_id])
        end

        if @card && @card.update!(card_params)
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

    def share
        # debugger
        # co_worker = User.find_by(id: params[:co_worker_id])
        # card = Card.find_by(id: params[:id])
        share = Share.create(user_id: params[:co_worker_id], shareable_id: params[:id], shareable_type: 'Card')
        if share.save
            render json: share.user.id
        else
            render json: share.errors.full_messages, status: :unprocessable_entity
        end
    end

    def unshare
        card = Card.find_by(id: params[:id])
        share = card.shares.find_by(user_id: params[:co_worker_id])
        if share.destroy
            render json: share.user.id
        else
            render json: share.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def card_params
        params.require(:card).permit(:title, :description, :list_id, :predecessor_id, :due_date, images: [])
    end
end