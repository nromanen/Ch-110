class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def consultation(tel)
  	@tel = tel
    mail( :to => 'deeven.dark@gmail.com', subject: "Consultation")   
  end


end
