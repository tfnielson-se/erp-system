class BomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :project, :boms_total

  def project
    object.project.name
  end

  def boms_total
    object.item_qty * object.item.price
  end
end
