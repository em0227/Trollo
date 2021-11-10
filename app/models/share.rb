class Share < ApplicationRecord
    belongs_to :shareable, polymorphic: true
    belongs_to :user
end
