class VisitsController < ApplicationController
  before_action :authenticate_user!, except: :slots
  before_action :set_visit, only: [:show, :destroy]

  after_action :verify_authorized, except: [:index, :slots, :choose_date]
  after_action :verify_policy_scoped, only: :index

  # GET /visits
  # GET /visits.json
  def index
    @visits = policy_scope(Visit)
    @result = []
    @visits.each do |visit|
      @result << {id: visit.id, patient_name: visit.patient_name, doctor_name: visit.doctor_name,
                 start_time: visit.start_time, visit_duration: visit.visit_type.length}
    end
    respond_to do |format|
      format.html { @result }
      format.json { render json: @result }
    end
  end

  # GET /visits/1
  # GET /visits/1.json
  def show
    @visit = policy_scope(Visit).find(params[:id])
  end

  # GET /visits/new
  def new
    @visit = Visit.new
    authorize @visit
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
    authorize @visit
    @visit.created_by_id = current_user.id
    patient = User.find_by(id: visit_params[:patient_id])
    doctor = User.find_by(id: visit_params[:doctor_id])
    @visit.patient_name = "#{patient.name} #{patient.surname}"
    @visit.doctor_name = "#{doctor.name} #{doctor.surname}"

    respond_to do |format|
      if @visit.save
        format.html { redirect_to @visit, notice: 'Visit was successfully created.' }
        format.json { render json: @visit }
      else
        format.html { render :new, params: { doctor_id: 3 } }
        format.json { render json: @visit.errors.full_messages, status: :unprocessable_entity }
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
        format.json { render json: @visit.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # def get_patient_visits
  #   @visits = Visit.where("start_time > :current_time AND patient_id = :user_id",
  #                                {current_time: DateTime.now, user_id: current_user.id})
  # end
  #
  # def show_history
  #   @visits = Visit.where("start_time < :current_time AND patient_id = :user_id",
  #                        {current_time: DateTime.now, user_id: current_user.id})
  # end

  def slots
    date = DateTime.iso8601(params[:date])

    schedule = Schedule.find_by(user: params[:doctor_id], day: date.strftime("%u"), start_date: '2000-01-01'..date, end_date: date..DateTime::Infinity.new)
    if schedule
      result = SlotManager.new(schedule, date, params[:doctor_id]).get_slots
    else
      result = []
    end
    respond_to do |format|
      format.html { render json: result }
      format.json { render json: result }
    end
  end

  def choose_date
    @doctor_id = params[:id]
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_visit
    @visit = Visit.find(params[:id])
    authorize @visit
  end

  # Only allow a list of trusted parameters through.
  def visit_params
    params.require(:visit).permit(:patient_id, :doctor_id, :start_time, :visit_type_id)
  end
end
