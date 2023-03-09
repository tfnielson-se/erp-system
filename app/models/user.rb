class User < ApplicationRecord
  has_many :pos
  has_many :items, through: :pos

  has_many :users_projects
  has_many :projects, through: :users_projects

  has_secure_password

  validates :first_name, presence: true
end
