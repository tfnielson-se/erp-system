class PosController < ApplicationController
  before_action :set_po, only: %i[ show ]
  wrap_parameters format: []

  # GET /pos
  def index
    @pos = Po.all.order(:po_number)
    render json: @pos
  end

  # GET /pos/1
  def show
    render json: @po, status: :ok
  end

  # POST /pos
  def create
    po = Po.create!(po_params)
    render json: po, status: :created
  end

  # PATCH/PUT /pos/1
  def update
    po = Po.find_by(id: params[:id])
    po.update!(po_params)
    render json: po, status: :accepted
  end

  # DELETE /pos/1
  def destroy
    po = Po.where(po_number: params[:id])
    # byebug
    po.destroy_all
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_po
      @po = Po.where(po_number: params[:id])
      # byebug
    end

    # Only allow a list of trusted parameters through.
    def po_params
      params.permit(:date, :po_number, :user_id, :item_id, :item_qty, :po_total_cost)
    end
end
