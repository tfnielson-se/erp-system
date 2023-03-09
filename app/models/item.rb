class Item < ApplicationRecord
  has_many :boms, dependent: :destroy
  has_many :projects, through: :boms

  has_many :pos, dependent: :destroy
  has_many :users, through: :pos
end
