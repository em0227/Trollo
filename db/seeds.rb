# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo_user = User.create(email: 'em0227new@aa.io', password: '123123', name: 'Emily');
demo_board = Board.create(title: 'First Board', bg_color: 'orange', author: demo_user);

file = open('https://trollo-aa-seeds.s3.amazonaws.com/fall.jpg')

demo_board.photo.attach(io: file, filename: 'fall.jpg')

demo_list_1 = List.create(title: 'todo', board: demo_board, author: demo_user)
demo_list_2 = List.create(title: 'done', board: demo_board, author: demo_user)

demo_card_1 = Card.create(title: 'drag and drop', description: "drag and drop in the same list", list: demo_list_1, author: demo_user)
demo_card_2 = Card.create(title: 'add and delete attachments', description: "still gotta fixed the enlarge image issue, next to-do", list: demo_list_2, author: demo_user)

attachment_1 = open('https://trollo-aa-seeds.s3.amazonaws.com/drag_drop_issue.png')

demo_card_1.images.attach(io: attachment_1, filename: 'drag_drop_issue.png' )

demo_coworker_1 = User.create(email: 'amy@aa.io', password:'123123', name:'Amy')
demo_coworker_2 = User.create(email: 'emma@aa.io', password:'123123', name:'Emma')

share_1 = Share.create(user: demo_coworker_1, shareable_id: demo_board.id, shareable_type: 'Board')
share_2 = Share.create(user: demo_coworker_2, shareable_id: demo_board.id, shareable_type: 'Board')