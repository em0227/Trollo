
@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :bg_color, :author_id, :bg_photo
        if board.photo.attached?
            json.photo url_for(board.photo)
        end
        json.sharedCoworkers board.co_workers
        # json.owner board.author, :name, :email
    end
end

# json.name @boards[0].author.name
# not sure why need begin rescue here see it from the pokemon