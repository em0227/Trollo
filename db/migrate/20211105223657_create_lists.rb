class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :lists, :author_id
    add_index :lists, :title
  end
end
