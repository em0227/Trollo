# == Schema Information
#
# Table name: shares
#
#  id             :bigint           not null, primary key
#  shareable_id   :bigint
#  shareable_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#
class Share < ApplicationRecord
    validates :user_id, exclusion: { in: -> (share) {[share.shareable.author.id]}, message: "can't invite themselves"}
    belongs_to :shareable, polymorphic: true
    belongs_to :user
end
