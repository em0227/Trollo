class ChangeTeamName < ActiveRecord::Migration[5.2]
  def change
    rename_table('team', 'teams')
  end
end
