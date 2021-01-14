class HomeController < ApplicationController

  skip_before_action :verify_authenticity_token
	
  def index

  end

  def send_numb
  	tel = params[:tel]
  	ApplicationMailer.consultation(tel).deliver_now
  	redirect_to :action => "index"
  end

end
