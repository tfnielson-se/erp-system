class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :material
      t.string :description
      t.string :vendor
      t.integer :price

      t.timestamps
    end
  end
end
