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

demo_board.photo.attach(io: file, filename: 'fall.jpg')

demo_list_1 = List.create(title: 'todo', board_id: 1, author_id: 1)
demo_list_2 = List.create(title: 'done', board_id: 1, author_id: 1)

demo_card_1 = Card.create(title: 'drag and drop', description: "drag and drop in the same list", list_id: 1, author_id: 1)
demo_card_2 = Card.create(title: 'add and delete attachments', description: "still gotta fixed the enlarge image issue, next to-do", list_id: 2, author_id: 1)

attachment_1 = open('https://trollo-aa-seeds.s3.amazonaws.com/drag_drop_issue.png')

demo_card_1.images.attach(io: attachment_1, filename: 'drag_drop_issue.png' )