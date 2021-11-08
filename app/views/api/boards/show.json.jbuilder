
# debugger
if @board.photo.attached?
    json.extract! @board, :id, :title, :author_id, :bg_color 
    json.photo url_for(@board.photo)
else
    json.extract! @board, :id, :title, :author_id, :bg_color 
    
end

# json.extract! @lists, :id, :title, :board_id, :author_id



