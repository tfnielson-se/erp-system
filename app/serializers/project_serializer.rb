class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_active, :budget, :boms
  has_many :boms

  # def boms
  #   object.boms.map{|bom| bom.name}.tally
  # end

end
