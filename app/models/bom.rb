class Bom < ApplicationRecord
  belongs_to :project
  belongs_to :item
end
