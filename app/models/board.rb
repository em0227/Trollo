class Board < ApplicationRecord
    BG_COLORS = ['white', 'lightskyblue', 'mediumorchid', 'lemonchiffon', 'orange', 'limegreen']

    validates :title, :author_id, :bg_color, presence: true
    validates :bg_color, inclusion: BG_COLORS

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

end
