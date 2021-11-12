# == Schema Information
#
# Table name: cards
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :text
#  list_id        :integer          not null
#  author_id      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  predecessor_id :integer
#  due_date       :date
#
require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
