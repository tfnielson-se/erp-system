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

name = ["BOM1","BOM2", "BOM3", "BOM4", "BOM5", "BOM6","BOM7", "BOM8", "BOM9", "BOM10"]

desc1 = Faker::Construction.subcontract_category
desc2 =Faker::Construction.subcontract_category
desc3 =Faker::Construction.subcontract_category
desc4 =Faker::Construction.subcontract_category
desc5 =Faker::Construction.subcontract_category
desc6 =Faker::Construction.subcontract_category
desc7 =Faker::Construction.subcontract_category
desc8 =Faker::Construction.subcontract_category
desc9 =Faker::Construction.subcontract_category
desc10 =Faker::Construction.subcontract_category

10.times do
  Bom.create(name: name.sample, description: desc1, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc2, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc10, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc3, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc4, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc5, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc6, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc7, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc8, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name.sample, description: desc9, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

puts "🗒️ projects seeded"

puts "seeding users... 👤"
u1 = User.create(first_name: "Galen", last_name: "Gastby", email: "galen@erpsystem.com", password: "Galen123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u2 = User.create(first_name: "Tom", last_name: "Angotee", email: "tom@erpsystem.com", password: "Tom123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u3 = User.create(first_name: "Sam", last_name: "Aguas", email: "sam@erpsystem.com", password: "Sam123!?", title: "Master Wizard of Wizardry", is_active: true, is_admin: true)
u4 = User.create(first_name: "Thomas", last_name: "O'Nielson", email: "thomas@erpsystem.com", password: "Thomas123!?", title: Faker::Construction.role, is_active: true, is_admin: true)
u5 = User.create(first_name: "Nick", last_name: "Stokefield", email: "nick@erpsystem.com", password: "Nick123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u6 = User.create(first_name: "Owen", last_name: "Wheelson", email: "owen@erpsystem.com", password: "Owen123!?", title: Faker::Construction.role, is_active: true, is_admin: false)
u7 = User.create(first_name: "Stephen B", last_name: "Smith", email: "stephen@erpsystem.com", password: "Stephen123!?", title: "Master Wizard of Wizardry", is_active: true, is_admin: true)
u8 = User.create(first_name: "Josias", last_name: "Youngfellow", email: "josias@erpsystem.com", password: "Josias123!?", title: Faker::Construction.role, is_active: true, is_admin: true)




puts "👤 users seeded"

puts "seeding POs... 🧾"

1000.times do
  Po.create(po_number: rand(1..100), date: Faker::Date.between(from: '2014-09-23', to: '2023-03-01'), user_id: User.ids.sample, item_id: Item.ids.sample, item_qty: rand(1..20), po_total_cost: 0)
end

puts "🧾 POs seeded"

puts "seeding BOMs... 🛠️"

name = ["BOM1","BOM2", "BOM3", "BOM4", "BOM5", "BOM6","BOM7", "BOM8", "BOM9", "BOM10"]

desc1 = "Scaffolding"
desc2 = "Plumbing"
desc3 = "Tile & Stone"
desc4 = "Electric"
desc5 = "Concrete"
desc6 = "Framing"
desc7 = "Exterior"
desc8 = "Interior"
desc9 = "Network"
desc10 = "Maintenace"

10.times do
  Bom.create(name: name[1], description: desc1, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[2], description: desc2, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[3], description: desc10, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[4], description: desc3, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[5], description: desc4, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[6], description: desc5, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[7], description: desc6, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[8], description: desc7, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[9], description: desc8, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

10.times do
  Bom.create(name: name[0], description: desc9, item_qty: rand(1..20), item_id: Item.ids.sample, project_id: Project.ids.sample)
end

puts "🛠️ BOMs seeded"

puts "seeding UsersProjects... 🛠️"

UsersProject.create(project: Project.all.find(1), user_id: u1.id)
UsersProject.create(project: Project.all.find(2), user_id: u2.id)
UsersProject.create(project: Project.all.find(3), user_id: u3.id)
UsersProject.create(project: Project.all.find(4), user_id: u4.id)
UsersProject.create(project: Project.all.find(5), user_id: u5.id)
UsersProject.create(project: Project.all.find(6), user_id: u6.id)
UsersProject.create(project: Project.all.find(7), user_id: u7.id)
UsersProject.create(project: Project.all.find(8), user_id: u8.id)
UsersProject.create(project: Project.all.find(9), user_id: u1.id)
UsersProject.create(project: Project.all.find(10), user_id: u2.id)
UsersProject.create(project: Project.all.find(1), user_id: u3.id)
UsersProject.create(project: Project.all.find(2), user_id: u4.id)
UsersProject.create(project: Project.all.find(3), user_id: u5.id)
UsersProject.create(project: Project.all.find(4), user_id: u6.id)
UsersProject.create(project: Project.all.find(5), user_id: u7.id)

puts "🛠️ UsersProjects seeded"