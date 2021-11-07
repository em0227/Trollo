@cards.each do |card|
    json.set! card.id do 
        json.extract! card, :id, :title, :description, :list_id, :author_id
    end
end