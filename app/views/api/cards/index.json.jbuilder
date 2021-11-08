@cards.each do |card|
    json.set! card.id do 
        json.extract! card, :id, :title, :description, :list_id, :author_id
        if card.images
            json.extract! card, :id, :title, :description, :author_id, :list_id
    json.imageUrls card.images.map {|file| url_for(file) }
        end
    end
end
