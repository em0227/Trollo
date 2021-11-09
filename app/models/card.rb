class Card < ApplicationRecord
    validates :title, :list_id, :author_id, presence: true
    # after_initialize :assign_order

    belongs_to :list,
        class_name: :List

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many_attached :images

    # def assign_order
    #     list = self.list
    #     cards_in_list = list.cards
    #     if cards_in_list == []
    #         self.predecessor_id = 0
    #     else
    #         self.predecessor_id = list.cards.last.id
    #     end 
    # end

    def change_order(after_card)

        #need to deal with different list issue?

        original_predecessor_id = self.predecessor_id
       
        original_follower = Card.find_by(predecessor_id: self.predecessor_id)
        # this is a card that will be affected
        
        after_card_original_follower = Card.find_by(predecessor_id: after_card.id)
        # this is another that will be affected

        if after_card
            self.predecessor_id = after_card.id
        else
            self.predecessor_id = 0
            original_predecessor = Card.find_by(id: original_predecessor_id)
            original_predecessor.predecessor_id = self.id
            #if move to first, the predecessor will become self' follower
        end
        #assign the dragged card new predecessor, if after_card is nil, that means it got move to the first
        
        if original_follower 
            original_follower.predecessor_id = original_predecessor_id
        end
        #as self has chagned place, the original following card (if exists) will follow self's original predecessor
        
        if after_card_original_follower && after_card_original_follower != self
            after_card_original_follower.predecessor_id = self.id
        end
        #self will have a new follower too (if exists)


    end
end
