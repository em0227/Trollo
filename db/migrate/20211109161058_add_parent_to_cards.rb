class AddParentToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :predecessor_id, :integer
  end
end
