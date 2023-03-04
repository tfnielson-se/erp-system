class BomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :item_qty
  has_one :project
  has_one :item
end
