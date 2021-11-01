class AddColorToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :bg_color, :string, default: 'white'
  end
end
