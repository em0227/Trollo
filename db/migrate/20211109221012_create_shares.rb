class CreateShares < ActiveRecord::Migration[5.2]
  def change
    create_table :team do |t|
      t.bigint :sharable_id
      t.string :sharable_type
      t.timestamps
    end
    add_index :team, [:sharable_type, :sharable_id]
  end
end
