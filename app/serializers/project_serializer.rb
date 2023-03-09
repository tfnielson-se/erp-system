class ProjectSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper
  attributes :id, :name, :description, :is_active, :budget, :boms
  has_many :boms

  def boms
    object.boms.map{|bom| bom.name}.tally
  end

  def budget
    # "$#{'%.2f' % object.budget}"
    number_to_currency(object.budget)
  end

end
