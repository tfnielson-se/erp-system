class User < ApplicationRecord
  has_many :pos, dependent: :destroy
  has_many :items, through: :pos

  has_many :users_projects
  has_many :projects, through: :users_projects

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  # validates :password, presence: true
end
