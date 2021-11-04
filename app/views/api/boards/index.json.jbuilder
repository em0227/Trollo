
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