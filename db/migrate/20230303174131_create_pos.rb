class CreatePos < ActiveRecord::Migration[7.0]
  def change
    create_table :pos do |t|
      t.integer :po_number
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.integer :item_qty
      t.integer :po_total_cost

      t.timestamps
    end
  end
end
