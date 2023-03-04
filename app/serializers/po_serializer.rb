class PoSerializer < ActiveModel::Serializer
  attributes :id, :date, :item_qty, :po_total_cost
  has_one :user
  has_one :item
end
