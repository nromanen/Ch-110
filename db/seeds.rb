# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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

visit_types = VisitType.create([{name: 'Inspection', description: 'Inspection', length: 30},
                                {name: 'Consultation', description: 'Consultation', length: 20}])

schedules = Schedule.create([{user_id: User.find_by(email: 'doctor1@gmail.com'), day: 'Monday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 09:00:00', visit_type_id: 1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor1@gmail.com'), day: 'Tuesday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type_id: 1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor1@gmail.com'), day: 'Wednesday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 09:00:00', visit_type_id: 1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor1@gmail.com'), day: 'Thursday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type_id: 1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor1@gmail.com'), day: 'Friday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 09:00:00', visit_type_id: 1, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor2@gmail.com'), day: 'Monday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type_id: 2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor2@gmail.com'), day: 'Tuesday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type_id: 2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor2@gmail.com'), day: 'Wednesday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type_id: 2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor2@gmail.com'), day: 'Thursday', start_time: '2000-01-01 09:00:00',
                              end_time: '2000-01-01 13:00:00', visit_type_id: 2, start_date: '2021-01-01', end_date: '2021-01-31'},
                             {user_id: User.find_by(email: 'doctor2@gmail.com'), day: 'Friday', start_time: '2000-01-01 14:00:00',
                              end_time: '2000-01-01 18:00:00', visit_type_id: 2, start_date: '2021-01-01', end_date: '2021-01-31'}])

visits = Visit.create([{patient_id: User.find_by(email: 'user1@gmail.com'), doctor_id: User.find_by(email: 'doctor1@gmail.com'),
                        start_time: '2021-01-08 10:00:00', visit_type: 1, created_by_id: User.find_by(email: 'user1@gmail.com')},
                       {patient_id: User.find_by(email: 'user1@gmail.com'), doctor_id: User.find_by(email: 'doctor1@gmail.com'),
                        start_time: '2021-01-13 11:00:00', visit_type: 1, created_by_id: User.find_by(email: 'user1@gmail.com')},
                       {patient_id: User.find_by(email: 'user1@gmail.com'), doctor_id: User.find_by(email: 'doctor1@gmail.com'),
                        start_time: '2021-01-19 15:00:00', visit_type: 1, created_by_id: User.find_by(email: 'user1@gmail.com')},
                       {patient_id: User.find_by(email: 'user2@gmail.com'), doctor_id: User.find_by(email: 'doctor2@gmail.com'),
                        start_time: '2021-01-12 12:00:00', visit_type: 2, created_by_id: User.find_by(email: 'user2@gmail.com')},
                       {patient_id: User.find_by(email: 'user2@gmail.com'), doctor_id: User.find_by(email: 'doctor2@gmail.com'),
                        start_time: '2021-01-15 17:00:00', visit_type: 2, created_by_id: User.find_by(email: 'user2@gmail.com')},
                       {patient_id: User.find_by(email: 'user2@gmail.com'), doctor_id: User.find_by(email: 'doctor2@gmail.com'),
                        start_time: '2021-01-18 16:00:00', visit_type: 2, created_by_id: User.find_by(email: 'user2@gmail.com')}])