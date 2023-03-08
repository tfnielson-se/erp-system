class Project < ApplicationRecord
  has_many :boms, dependent: :destroy
  has_many :items, through: :boms

  has_many :users_projects, dependent: :destroy
  has_many :users, through: :users_projects
end
