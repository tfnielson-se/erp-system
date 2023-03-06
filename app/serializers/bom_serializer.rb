class BomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :project

  def project
    object.project.name
  end
end
