class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessble_entity

  def render_not_found record
    render json:{error: "#{record.model} not found"}, status: :not_found
  end

  def render_unprocessble_entity invalid
    render json:{errors: ["validation errors"]},status: :unprocessable_entity
  end

end
