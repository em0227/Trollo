
# debugger
if @card.images
    
    json.extract! @card, :id, :title, :description, :author_id, :list_id
    json.imageUrls @card.images.map {|file| url_for(file) }
    
else
    json.extract! @card, :id, :title, :description, :author_id, :list_id
end

# elsif @card.images.length == 1
#     debugger
#     json.extract! @card, :id, :title, :description, :author_id, :list_id
#     json.imageUrls url_for(@card.images)