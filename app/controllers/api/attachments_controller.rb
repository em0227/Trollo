class Api::AttachmentsController < ApplicationController
    # before_action :ensure_logged_in

    def destroy
        @card = Card.find_by(id: params[:card_id])
        # @card = current_user.cards.find_by(id: params[:card_id])
        @card.images.find(params[:id]).purge
        render "api/cards/show"
    end
end