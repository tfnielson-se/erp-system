class Item < ApplicationRecord
  has_many :boms
  has_many :projects, through: :boms

  has_many :pos
  has_many :users, through: :pos
end
