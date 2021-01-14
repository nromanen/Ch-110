class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def consultation(tel)
  	@tel = tel
    mail( :to => 'healthbookcv@gmail.com', subject: "Consultation")   
  end


end
