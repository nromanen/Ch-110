class VisitsController < ApplicationController
  before_action :set_visit, only: [:show, :destroy]

  # GET /visits
  # GET /visits.json
  def index
    if current_user
      @visits = Visit.all
    end
  end

  # GET /visits/1
  # GET /visits/1.json
  def show
    unless current_user
      redirect_to visits_url
    end
  end

  # GET /visits/new
  def new
    @visit = Visit.new
  end


  # GET /visits/1/edit
  # def edit
  #   unless @current_user.is_admin || session[:user_id] == @visit.user_id
  #     redirect_to @current_user
  #   end
  # end

  # POST /visits
  # POST /visits.json
  def create
    @visit = Visit.new(visit_params)
    @visit.created_by_id = current_user.id

    respond_to do |format|
      if @visit.save
        format.html { redirect_to @visit, notice: 'Visit was successfully created.' }
        format.json { render :show, status: :created, location: @visit }
      else
        format.html { render :new, params: { doctor_id: 3 } }
        format.json { render json: @visit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visits/1
  # PATCH/PUT /visits/1.json
  # def update
  #   if @current_user.is_admin || session[:user_id] == @visit.user_id
  #     respond_to do |format|
  #       if @visit.update(visit_params)
  #         format.html { redirect_to @visit, notice: 'Visit was successfully updated.' }
  #         format.json { render :show, status: :ok, location: @visit }
  #       else
  #         format.html { render :edit }
  #         format.json { render json: @visit.errors, status: :unprocessable_entity }
  #       end
  #     end
  #   else
  #     redirect_to @current_user
  #   end
  # end

  # DELETE /visits/1
  # DELETE /visits/1.json
  def destroy
    if @visit.destroy
      respond_to do |format|
        format.html { redirect_to visits_url, notice: 'Visit was successfully canceled.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to visits_path, alert: "Visit can't be canceled. #{@visit.errors[:base][-1]}"}
      end
    end
  end

  # def slots
  #   schedule = Schedule.where(doctor = params[:doctor], day = params[:date.day])
  #
  # end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_visit
    @visit = Visit.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def visit_params
    params.require(:visit).permit(:patient_id, :doctor_id, :start_time, :visit_type_id)
  end
end
