class Item < ApplicationRecord
  has_many :boms, dependent: :destroy
  has_many :projects, through: :boms

  has_many :pos, dependent: :destroy
  has_many :users, through: :pos

  validates :description, presence: true
  validates :material, presence: true
  validates :price, numericality: { greater_than: 0}
  validates :vendor, presence: true

end
