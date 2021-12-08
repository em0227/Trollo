class ChangeBoardColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_default :boards, :bg_photo, from: nil, to: "" 
  end
end
