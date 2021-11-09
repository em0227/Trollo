require 'byebug'
class Card < ApplicationRecord
    validates :title, :list_id, :author_id, presence: true
    after_initialize :ensure_predecessor_id

    belongs_to :list,
        class_name: :List

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many_attached :images

    def ensure_predecessor_id
        self.predecessor_id ||= self.assign_order
    end

    def assign_order      
        list = self.list
        cards_in_list = list.cards
        if cards_in_list == []
            self.update(predecessor_id: 0)       
        else
            self.update(predecessor_id: list.cards.last.id)          
        end 
        return self.predecessor_id
    end

    def change_order(after_card_id)

        after_card = Card.find(after_card_id)
        original_list = self.list_id
        moved_list = after_card.list_id
        
        if original_list != moved_list
            self.update(list_id: moved_list.id)
            self.assign_order
            return
        end
        #could refactor to better deal with different list but so far should work
        
        original_predecessor_id = self.predecessor_id
        
        original_follower = Card.find_by(predecessor_id: self.id)
        
        # card1: this is a card that will be affected (same list)
        
        after_card_original_follower = Card.find_by(predecessor_id: after_card.id)
        # card2: this is another that will be affected (same list)

        # card3: there will be a third card being affected if moved to another list as the first card

        if after_card
            byebug
            self.update(predecessor_id: after_card.id)
        elsif original_predecessor_id != 0
            self.update(predecessor_id: 0)
            original_predecessor = Card.find_by(id: original_predecessor_id)
            original_predecessor.update(predecessor_id: self.id)
            #if move to first, the predecessor will become self' follower
        end
        # dragged_card: assign the dragged card new predecessor, if after_card is nil, that means it got move to the first
        
        if original_follower 
            original_follower.update(predecessor_id: original_predecessor_id)
        end
        #card1: as self has chagned place, the original following card (if exists) will follow self's original predecessor
        
        if after_card_original_follower && after_card_original_follower != self
            after_card_original_follower.update(predecessor_id: self.id)
        end
        #card2: self will have a new follower too (if exists)

        #edge case 1: if the dragged is originally the first card, its follower

    end
end
