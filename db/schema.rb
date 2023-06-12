# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_03_205756) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boms", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "item_qty"
    t.bigint "project_id"
    t.bigint "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_boms_on_item_id"
    t.index ["project_id"], name: "index_boms_on_project_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "material"
    t.string "description"
    t.string "vendor"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pos", force: :cascade do |t|
    t.integer "po_number"
    t.datetime "date"
    t.bigint "user_id", null: false
    t.bigint "item_id", null: false
    t.integer "item_qty"
    t.integer "po_total_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_pos_on_item_id"
    t.index ["user_id"], name: "index_pos_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "budget"
    t.boolean "is_active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "title"
    t.boolean "is_active"
    t.boolean "is_admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users_projects", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_users_projects_on_project_id"
    t.index ["user_id"], name: "index_users_projects_on_user_id"
  end

  add_foreign_key "boms", "items"
  add_foreign_key "boms", "projects"
  add_foreign_key "pos", "items"
  add_foreign_key "pos", "users"
  add_foreign_key "users_projects", "projects"
  add_foreign_key "users_projects", "users"
end
