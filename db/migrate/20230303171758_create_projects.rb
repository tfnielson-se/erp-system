class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.integer :budget
      t.boolean :is_active

      t.timestamps
    end
  end
end
