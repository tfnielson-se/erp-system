class UsersController < ApplicationController
  before_action :set_user, only: %i[ update destroy ]
  # skip_before_action :authorized_user

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    puts session[:user_id]
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      puts "working"
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  # def show
  #   render json: current_user, status: :ok
  # end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :title, :is_active, :is_admin)
    end
end
