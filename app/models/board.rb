class Board < ApplicationRecord
    BG_COLORS = ['white', 'blue', 'velvet', 'yellow', 'orange', 'green']

    validates :title, :author_id, :bg_color, presence: true
    validates :bg_color, inclusion: BG_COLORS

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

end
