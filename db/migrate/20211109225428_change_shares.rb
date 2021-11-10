class ChangeShares < ActiveRecord::Migration[5.2]
  def change
    rename_column(:shares, :sharable_id, :shareable_id)
    rename_column(:shares, :sharable_type, :shareable_type)
    remove_index :shares, [:shareable_type, :shareable_id]
    add_index :shares, [:user_id, :shareable_id, :shareable_type], unique: true
  end
end
