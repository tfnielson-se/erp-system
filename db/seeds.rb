require 'faker'

Item.destroy_all
Project.destroy_all
User.destroy_all
Po.destroy_all
Bom.destroy_all
UsersProject.destroy_all

puts "seeding items... 🔩"


item_descriptions = ["1/4 F-NPT, 1/2 M-SW", "3/4 M-NPT, 1/2 M-NPT", "1/2 F-SW, 1/4 M-SW", "1/4 F-NPT, 1/2 M-SW", "1/4 F-NPT, 1/2 M-SW", "1/4 M-NPT, 1/2 F-SW", "1/2 F-NPT, 3/4 M-SW", "1/4 F-NPT, 1/4 M-SW", "1/4 F-NPT, 1/4 F-NPT", "1/2 M-SW, 1/2 M-SW", "1/4 F-SW, 1/4 F-SW"]

50.times do
  Item.create(material: Faker::Construction.material, description: item_descriptions.sample , vendor: Faker::Company.name , price: rand(100_00..1000_00))
end

puts  "🔩 items seeded"

puts "seeding projects... 🗒️"

10.times do
  Project.create(name: Faker::App.name , description: Faker::Lorem.paragraphs, is_active: true, budget: rand(100_000_00..100_0000_00))
end

puts "🗒️ projects seeded"

puts "seeding users... 👤"
u1 = User.create(first_name: "Galen", last_name: "Gastby", email: "galen@erpsystem.com", password_digest: "Galen123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u2 = User.create(first_name: "Tom", last_name: "Angotee", email: "tom@erpsystem.com", password_digest: "Tom123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u3 = User.create(first_name: "Sam", last_name: "Aguas", email: "sam@erpsystem.com", password_digest: "Sam123!?", title: "Master Wizard of Wizardry", is_active: true, is_admin: true)
u4 = User.create(first_name: "Thomas", last_name: "O'Nielson", email: "thomas@erpsystem.com", password_digest: "Thomas123!?", title: Faker::Construction.role, is_active: true, is_admin: true)


puts "👤 users seeded"

puts "seeding POs... 🧾"

1000.times do
  Po.create(po_number: rand(1..100), date: Faker::Date.between(from: '2014-09-23', to: '2023-03-01'), user_id: User.ids.sample, item_id: Item.ids.sample, item_qty: rand(1..20), po_total_cost: 0)
end

puts "🧾 POs seeded"

puts "seeding BOMs... 🛠️"

name = ["BOM1","BOM2", "BOM3", "BOM4", "BOM5", "BOM6","BOM7", "BOM8", "BOM9", "BOM10"]

desc = [Faker::Construction.subcontract_category]

50.times do
  Bom.create(name: name.sample, description: desc.sample, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

puts "🛠️ BOMs seeded"

puts "seeding UsersProjects... 🛠️"

30.times do
  UsersProject.create(project_id: Project.ids.sample, user_id: User.ids.sample)
end

puts "🛠️ UsersProjects seeded"