class ItemSerializer < ActiveModel::Serializer
  attributes :id, :material, :description, :vendor, :price
end
