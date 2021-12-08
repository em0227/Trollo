# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo_user = User.create(email: 'em0227new@aa.io', password: '123123', name: 'Emily');
demo_board_1 = Board.create(title: 'First Sprint', bg_color: 'orange', author_id: demo_user.id);
demo_board_2 = Board.create(title: 'Sprint Plan', bg_color: 'lightskyblue', author_id: demo_user.id, bg_photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODEyMDB8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnxlbnwwfDB8fHwxNjM4OTI5Mzk0&ixlib=rb-1.2.1&q=80&w=1080");

file = open('https://trollo-aa-seeds.s3.amazonaws.com/fall.jpg')

demo_board_1.photo.attach(io: file, filename: 'fall.jpg')

demo_list_1 = List.create(title: 'todo', board_id: demo_board_1.id, author_id: demo_user.id)
demo_list_2 = List.create(title: 'done', board_id: demo_board_1.id, author_id: demo_user.id)
demo_list_3 = List.create(title: 'issues', board_id: demo_board_1.id, author_id: demo_user.id)
demo_list_4 = List.create(title: 'to be discussed', board_id: demo_board_2.id, author_id: demo_user.id)
demo_list_5 = List.create(title: 'in plan', board_id: demo_board_2.id, author_id: demo_user.id)

demo_card_1 = Card.create(title: 'drag and drop', description: "drag and drop in the same list", list_id: demo_list_1.id, author_id: demo_user.id)
demo_card_2 = Card.create(title: 'add and delete attachments', description: "still gotta fixed the enlarge image issue, next to-do", list_id: demo_list_2.id, author_id: demo_user.id)

attachment_1 = open('https://trollo-aa-seeds.s3.amazonaws.com/drag_drop_issue.png')

demo_card_1.images.attach(io: attachment_1, filename: 'drag_drop_issue.png' )

demo_coworker_1 = User.create(email: 'amy@aa.io', password:'123123', name:'Amy')
demo_coworker_2 = User.create(email: 'emma@aa.io', password:'123123', name:'Emma')

share_1 = Share.create(user_id: demo_coworker_1.id, shareable_id: demo_board_1.id, shareable_type: 'Board')
share_2 = Share.create(user_id: demo_coworker_2.id, shareable_id: demo_board_1.id, shareable_type: 'Board')