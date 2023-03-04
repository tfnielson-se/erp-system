class UsersProjectsController < ApplicationController
  before_action :set_users_project, only: %i[ show update destroy ]

  # GET /users_projects
  def index
    @users_projects = UsersProject.all

    render json: @users_projects
  end

  # GET /users_projects/1
  def show
    render json: @users_project
  end

  # POST /users_projects
  def create
    @users_project = UsersProject.new(users_project_params)

    if @users_project.save
      render json: @users_project, status: :created, location: @users_project
    else
      render json: @users_project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users_projects/1
  def update
    if @users_project.update(users_project_params)
      render json: @users_project
    else
      render json: @users_project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users_projects/1
  def destroy
    @users_project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_project
      @users_project = UsersProject.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def users_project_params
      params.require(:users_project).permit(:project_id, :user_id)
    end
end
