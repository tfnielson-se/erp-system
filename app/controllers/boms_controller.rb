class BomsController < ApplicationController
  before_action :set_bom, only: %i[ show update destroy ]

  # GET /boms
  def index
    @boms = Bom.all

    render json: @boms
  end

  # GET /boms/1
  def show
    render json: @bom
  end

  # POST /boms
  def create
    @bom = Bom.new(bom_params)

    if @bom.save
      render json: @bom, status: :created, location: @bom
    else
      render json: @bom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boms/1
  def update
    if @bom.update(bom_params)
      render json: @bom
    else
      render json: @bom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boms/1
  def destroy
    @bom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bom
      @bom = Bom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bom_params
      params.permit(:name, :description, :item_qty, :project_id, :item_id)
    end
end
