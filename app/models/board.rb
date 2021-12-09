# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bg_color   :string           default("white")
#
class Board < ApplicationRecord
    BG_COLORS = ['white', 'lightskyblue', 'mediumorchid', 'lemonchiffon', 'orange', 'limegreen']

    validates :title, :author_id, :bg_color, presence: true
    validates :bg_color, inclusion: BG_COLORS

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    has_many :lists,
        class_name: :List,
        dependent: :destroy
    
    has_many :cards,
        through: :lists,
        source: :cards

    has_many :shares, as: :shareable

    def co_workers
        co_workers = []
        self.shares.each do |share|
            co_worker = User.find_by(id: share.user_id)
            co_workers << { id: co_worker.id, name: co_worker.name, email: co_worker.email }
        end
        return co_workers
    end

end
