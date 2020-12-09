# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([{email: 'admin@admin.com', password: 'admin1', name: 'Admin', surname: 'Admin',
                      phone_number: '000000000000', role: 0},
                     {email: 'user1@gmail.com', password: '123456', name: 'Tomy', surname: 'Anjelo',
                      phone_number: '380996775503'},
                     {email: 'user2@gmail.com', password: '123456', name: 'Jimm', surname: 'Klarck',
                      phone_number: '380971225344'}])