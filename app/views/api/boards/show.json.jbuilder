if @board.photo.attached?
    json.extract! @board, :id, :title, :author_id, :bg_color , :bg_photo
    json.owner @board.author, :name, :email
    json.photo url_for(@board.photo)
    json.sharedCoworkers @board.co_workers
   
else
    json.extract! @board, :id, :title, :author_id, :bg_color, :bg_photo
    json.owner @board.author, :name, :email
    json.sharedCoworkers @board.co_workers
end

# json.lists @board.lists do |list|
#     json.extract! list, :id, :title, :board_id, :author_id, :create_at
# end



