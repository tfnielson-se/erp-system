class Bom < ApplicationRecord
  belongs_to :project, optional: true
  belongs_to :item, optional: true

  validates :name, presence: true
  validates :description, presence: true
  # validates :project, presence: true

end
