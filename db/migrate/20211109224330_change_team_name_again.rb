class ChangeTeamNameAgain < ActiveRecord::Migration[5.2]
  def change
    rename_table('teams', 'shares')
    add_column :shares, :user_id, :integer
  end
end
