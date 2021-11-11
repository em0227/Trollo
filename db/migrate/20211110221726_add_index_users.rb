class AddIndexUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :name
  end
end
