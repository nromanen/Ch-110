# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
VisitType.destroy_all
Schedule.destroy_all
Visit.destroy_all

users = User.create([{email: 'admin@admin.com', password: 'admin1', password_confirmation: 'admin1',
                      name: 'Admin', surname: 'Admin', phone_number: '000000000000', role: 0,
                      confirmed_at: '202012120000'},
                     {email: 'doctor1@gmail.com', password: '123456', password_confirmation: '123456', name: 'Melissa',
                      surname: 'Jackson', phone_number: '380675551469', role: 2, confirmed_at: '202012120000'},
                     {email: 'doctor2@gmail.com', password: '123456', password_confirmation: '123456', name: 'Bruno',
                      surname: 'Senna', phone_number: '380674441799', role: 2, confirmed_at: '202012120000'},
                     {email: 'user1@gmail.com', password: '123456', password_confirmation: '123456', name: 'Tomy',
                      surname: 'Anjelo', phone_number: '380996775503', confirmed_at: '202012120000'},
                     {email: 'user2@gmail.com', password: '123456', password_confirmation: '123456', name: 'Jimm',
                      surname: 'Klarck', phone_number: '380971225344', confirmed_at: '202012120000'},
                     {email: 'manager@gmail.com', password: '123456', password_confirmation: '123456', name: 'Manager',
                      surname: 'Manager', phone_number: '11111111111', role: 1, confirmed_at: '202012120000'}])

visit_types = VisitType.create([{name: 'Check-up', description: 'Check-up', length: 30},
                                {name: 'Consultation', description: 'Consultation', length: 20}])

doctor_1 = User.find_by(email: 'doctor1@gmail.com')
doctor_2 = User.find_by(email: 'doctor2@gmail.com')
patient_1 = User.find_by(email: 'user1@gmail.com')
patient_2 = User.find_by(email: 'user2@gmail.com')
visit_type_1 = VisitType.find_by_id(1)
visit_type_2 = VisitType.find_by_id(2)

doctors = DoctorProfile.create([{photo_path: '111', specialization: 0, description: 'qwerty', user_id: doctor_1.id},
                                {photo_path: '111', specialization: 0, description: 'qwerty', user_id: doctor_2.id}])

doctors[0].avatar.attach(
    io: File.open('./public/avatars/first.jpeg'),
    filename: 'first.jpeg',
    content_type: 'application/jpeg'
  )

doctors[1].avatar.attach(
    io: File.open('./public/avatars/second.png'),
    filename: 'second.png',
    content_type: 'application/png'
  )


schedules = Schedule.create([{user: doctor_1, day: 'Monday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type: visit_type_1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_1, day: 'Tuesday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type: visit_type_1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_1, day: 'Wednesday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type: visit_type_1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_1, day: 'Thursday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type: visit_type_1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_1, day: 'Friday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type: visit_type_1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_2, day: 'Monday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type: visit_type_2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_2, day: 'Tuesday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type: visit_type_2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_2, day: 'Wednesday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type: visit_type_2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_2, day: 'Thursday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type: visit_type_2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user: doctor_2, day: 'Friday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type: visit_type_2, start_date: '2021-01-01', end_date: '2021-01-31'}])

visits = Visit.create([{patient: patient_1, doctor: doctor_1,
                        start_time: '2021-01-08 10:00:00', visit_type: visit_type_1},
                       {patient: patient_1, doctor: doctor_1,
                        start_time: '2021-01-13 11:00:00', visit_type: visit_type_1},
                       {patient: patient_1, doctor: doctor_1,
                        start_time: '2021-01-19 15:00:00', visit_type: visit_type_1},
                       {patient: patient_2, doctor: doctor_2,
                        start_time: '2021-01-12 12:00:00', visit_type: visit_type_2},
                       {patient: patient_2, doctor: doctor_2,
                        start_time: '2021-01-15 17:00:00', visit_type: visit_type_2},
                       {patient: patient_2, doctor: doctor_2,
                        start_time: '2021-01-18 16:00:00', visit_type: visit_type_2}])