class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :title
      t.boolean :is_active
      t.boolean :is_admin

      t.timestamps
    end
  end
end
