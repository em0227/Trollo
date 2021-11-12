class AddDueDateCard < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :due_date, :date
  end
end
