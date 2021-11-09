
# debugger
if @card.images
    
    json.extract! @card, :id, :title, :description, :author_id, :list_id
    json.image @card.images.map do |file| 
        json.imageUrl url_for(file)
        json.imageId file.id
    end
    
else
    json.extract! @card, :id, :title, :description, :author_id, :list_id
end

# elsif @card.images.length == 1
#     debugger
#     json.extract! @card, :id, :title, :description, :author_id, :list_id
#     json.imageUrls url_for(@card.images)