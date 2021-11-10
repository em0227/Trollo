
@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :bg_color, :author_id
        if board.photo.attached?
            json.photo url_for(board.photo)
        end
        json.sharedCoworkerIds board.shares.map {|share| share.user.id}
    end
end

# json.name @boards[0].author.name
# not sure why need begin rescue here see it from the pokemon