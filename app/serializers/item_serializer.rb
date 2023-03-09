class ItemSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper

  attributes :id, :material, :description, :vendor, :price

  def price
    number_to_currency(object.price)
  end
end
