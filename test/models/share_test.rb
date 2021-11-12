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
require 'test_helper'

class ShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
