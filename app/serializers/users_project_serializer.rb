class UsersProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_one :project
  has_one :user
end
