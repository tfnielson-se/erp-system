class BomsController < ApplicationController
  before_action :set_bom, only: %i[ show ]
  wrap_parameters format: []

  # GET /boms
  def index
    @boms = Bom.all.order(:name)
    render json: @boms
  end

  # GET /boms/bom1
  def show
    render json: @bom, status: :ok
  end

  # POST /boms
  def create
    bom = Bom.create!(bom_params)
    # byebug
    render json: bom, status: :created
  end

  # PATCH/PUT /boms/1
  def update
    bom = Bom.find_by(id: params[:id])
    # byebug
    bom.update!(bom_params)
    render json: bom, status: :accepted
  end

  # DELETE /boms/1
  def destroy
    bom = Bom.where(name: params[:id])
    # byebug
    bom.destroy_all
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bom
      @bom = Bom.all.select{|bom| bom.name === params[:id].upcase}
      # byebug
    end

    # Only allow a list of trusted parameters through.
    def bom_params
      params.permit(:name, :description, :item_qty, :project_id, :item_id)
    end
end
