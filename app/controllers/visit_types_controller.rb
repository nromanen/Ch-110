class VisitTypesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_visit_type, only: [:show, :edit, :update, :destroy]
  # GET /doctors
  # GET /doctors.json
  def index
    @visit_types = VisitType.order(:name)
    authorize @visit_types
  end

  # GET /doctors/1
  # GET /doctors/1.json
  def show

  end

  # GET /doctors/new
  def new
    @visit_type = VisitType.new
    authorize @visit_type
  end

  # GET /doctors/1/edit
  def edit

  end

  # POST /doctors
  # POST /doctors.json
  def create
    @visit_type = VisitType.new(visit_type_params)
    authorize @visit_type
    respond_to do |format|
        if @visit_type.save
          format.html { redirect_to @visit_type, notice: 'Visit type was successfully created.' }
          format.json { render :show, status: :created, location: @visit_type }
        else
          format.html { render :new }
          format.json { render json: @visit_type.errors, status: :unprocessable_entity }
        end
      end
  end

  # PATCH/PUT /doctors/1
  # PATCH/PUT /doctors/1.json
  def update
    respond_to do |format|
      if @visit_type.update(visit_type_params)
        format.html { redirect_to @visit_type, notice: 'Visit type was successfully updated.' }
        format.json { render :show, status: :ok, location: @visit_type }
      else
        format.html { render :edit }
        format.json { render json: @visit_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /doctors/1
  # DELETE /doctors/1.json
  def destroy
    if @visit_type.destroy
      respond_to do |format|
        format.html { redirect_to visit_types_url, notice: 'Visit type was successfully deleted.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to visit_types_path, alert: "Visit type can't be deleted. #{@dvisit_type.errors[:base][-1]}"}
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_visit_type
    @visit_type = VisitType.find(params[:id])
    authorize @visit_type
  end

  # Only allow a list of trusted parameters through.
  def visit_type_params
    params.require(:visit_type).permit(:name, :description, :length)
  end
end
