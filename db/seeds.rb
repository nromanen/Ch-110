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
                      surname: 'Klarck', phone_number: '380971225344', confirmed_at: '202012120000'}])

visit_types = VisitType.create([{name: 'Inspection', description: 'Inspection', length: 30},
                                {name: 'Consultation', description: 'Consultation', length: 20}])