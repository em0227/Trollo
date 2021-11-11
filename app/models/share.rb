class Share < ApplicationRecord
    validates :user_id, exclusion: { in: -> (share) {[share.shareable.author.id]}, message: "can't invite themselves"}
    belongs_to :shareable, polymorphic: true
    belongs_to :user
end
