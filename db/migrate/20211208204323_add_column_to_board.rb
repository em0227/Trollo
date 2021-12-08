class AddColumnToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :bg_photo, :string
  end
end
