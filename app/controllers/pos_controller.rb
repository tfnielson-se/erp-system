class PosController < ApplicationController
  before_action :set_po, only: %i[ show update destroy ]

  # GET /pos
  def index
    @pos = Po.all

    render json: @pos
  end

  # GET /pos/1
  def show
    render json: @po
  end

  # POST /pos
  def create
    @po = Po.new(po_params)

    if @po.save
      render json: @po, status: :created, location: @po
    else
      render json: @po.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pos/1
  def update
    if @po.update(po_params)
      render json: @po
    else
      render json: @po.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pos/1
  def destroy
    @po.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_po
      @po = Po.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def po_params
      params.permit(:date, :user_id, :item_id, :item_qty, :po_total_cost)
    end
end
