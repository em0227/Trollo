
@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :bg_color, :author_id
        begin
            json.photo url_for(board.photo)
        rescue
            json.photo
        end
    end
end

# json.name @boards[0].author.name
# not sure why need begin rescue here see it from the pokemon