# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :author_id, :card_id, presence: true
    
    belongs_to :card

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

end
