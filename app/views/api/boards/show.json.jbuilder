if @board.photo
    json.extract! @board, :id, :title, :author_id, :bg_color 
    json.photo url_for(@board.photo)
    json.sharedCoworkerIds @board.shares.map {|share| share.user.id}
else
    json.extract! @board, :id, :title, :author_id, :bg_color 
    json.sharedCoworkerIds 
end

# json.lists @board.lists do |list|
#     json.extract! list, :id, :title, :board_id, :author_id, :create_at
# end



