class Card < ApplicationRecord
    validates :title, :list_id, :author_id, presence: true

    belongs_to :list,
        class_name: :List

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
