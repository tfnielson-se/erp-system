class PoSerializer < ActiveModel::Serializer
  attributes :id, :po_number, :item_id, :item_qty, :po_total_cost
  # has_one :user
  has_one :item_id

  def po_total_cost
    object.item_qty * object.item.price
  end



end
