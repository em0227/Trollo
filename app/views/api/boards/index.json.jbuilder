
@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :bg_color, :author_id
    end
end