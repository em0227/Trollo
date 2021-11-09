@cards.each do |card|
    json.set! card.id do 
        json.extract! card, :id, :title, :description, :list_id, :author_id, :predecessor_id
        if card.images
            # json.extract! card, :id, :title, :description, :author_id, :list_id, :predecessor_id
            json.image card.images.map do |file| 
                json.imageUrl url_for(file)
                json.imageId file.id
            end
        end
    end
end
