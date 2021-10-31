class Board < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        class_name: :User

end
