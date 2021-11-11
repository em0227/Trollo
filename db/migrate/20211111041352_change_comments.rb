class ChangeComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :parent_card_id, :card_id
  end
end
