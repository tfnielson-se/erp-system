class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_active
end
