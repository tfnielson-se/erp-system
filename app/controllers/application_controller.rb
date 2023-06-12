class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authorized_user

  def current_user
    user = User.find_by(id: session[:user_id])
    user
  end

  def authorized_user
    render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end

  def render_not_found (record)
    render json:{error: "#{record.model} not found"}, status: :not_found
  end

  def render_unprocessable_entity invalid
    render json:{errors: ["Validation Errors"]},status: :unprocessable_entity
  end

end
