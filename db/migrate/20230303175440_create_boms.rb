class CreateBoms < ActiveRecord::Migration[7.0]
  def change
    create_table :boms do |t|
      t.string :name
      t.string :description
      t.integer :item_qty
      t.belongs_to :project, null: true, foreign_key: true
      t.belongs_to :item, null: true, foreign_key: true

      t.timestamps
    end
  end
end
