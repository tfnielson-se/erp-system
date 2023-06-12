class PoSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper

  attributes :id, :po_number, :item_id, :item_qty, :po_total_cost
  # has_one :user
  has_one :item_id

  def po_total_cost
    total = object.item_qty * object.item.price
    number_to_currency(total)
  end

end
