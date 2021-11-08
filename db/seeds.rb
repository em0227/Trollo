# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo_user = User.create(email: 'em0227new@aa.io', password: '123123', name: 'Emily');
demo_board = Board.create(title: 'First Board', bg_color: 'orange', author_id: 1);

file = open('https://trollo-aa-seeds.s3.amazonaws.com/fall.jpg')

demo_board.attach(io: file, fileman: 'fall.jpg')