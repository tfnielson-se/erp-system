class Project < ApplicationRecord
  has_many :boms
  has_many :items, through: :boms

  has_many :users_projects
  has_many :users, through: :users_projects
end
