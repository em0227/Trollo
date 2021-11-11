class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null:false, limit:280
      t.integer :author_id, null:false
      t.integer :parent_card_id, null:false
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :parent_card_id
  end
end
