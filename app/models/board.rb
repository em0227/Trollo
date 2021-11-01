class Board < ApplicationRecord
    BG_COLORS = ['white', 'blue', 'velvet', 'yellow', 'ornage', 'green']

    validates :title, :author_id, :bg_color, presence: true
    validates :bg_color, inclusion: BG_COLORS

    belongs_to :author,
        class_name: :User

end
