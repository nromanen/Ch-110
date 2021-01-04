class SchedulesController < ApplicationController
  before_action :set_schedule, only: [:show, :edit, :update, :destroy]

  # GET /visits
  # GET /visits.json
  def index
    @schedules = Schedule.where(id: current_user.id)
  end

  # GET /visits/1
  # GET /visits/1.json
  def show

  end

  # GET /visits/new
  def new
    @schedule = Schedule.new
  end


  # GET /visits/1/edit
  def edit

  end

  # POST /visits
  # POST /visits.json
  def create
    @schedule = Schedule.new(schedule_params)

    respond_to do |format|
      if @schedule.save
        format.html { redirect_to @schedule, notice: 'Schedule was successfully created.' }
        format.json { render :show, status: :created, location: @schedule }
      else
        format.html { render :new }
        format.json { render json: @schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visits/1
  # PATCH/PUT /visits/1.json
  def update
    respond_to do |format|
      if @schedule.update(schedule_params)
        format.html { redirect_to @schedule, notice: 'Schedule was successfully updated.' }
        format.json { render :show, status: :ok, location: @schedule }
      else
        format.html { render :edit }
        format.json { render json: @schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visits/1
  # DELETE /visits/1.json
  def destroy
    if @schedule.destroy
      respond_to do |format|
        format.html { redirect_to schedules_url, notice: 'Schedule was successfully canceled.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to schedules_path, alert: "Schedule can't be canceled. #{@schedule.errors[:base][-1]}"}
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_schedule
    @schedule = Schedule.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def schedule_params
    params.require(:schedule).permit(:user_id, :day, :start_time, :end_time, :visit_type_id)
  end
end
