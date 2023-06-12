class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :title, :is_active, :is_admin
  has_many :projects

  # def projects
  #   object.projects.map{|project| project.name}
  # end
end
