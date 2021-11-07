class List < ApplicationRecord
    validates :title, :board_id, :author_id, presence: true

    belongs_to :board,
        class_name: :Board

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :cards, dependent: :destroy
end
