
# debugger
if @card.images
    
    json.extract! @card, :id, :title, :description, :author_id, :list_id, :predecessor_id, :due_date
    json.image @card.images.map do |file| 
        json.imageUrl url_for(file)
        json.imageId file.id
    end
    json.sharedCoworkerIds @card.shares.map {|share| share.user.id}
    
else
    json.extract! @card, :id, :title, :description, :author_id, :list_id, :predecessor_id, :due_date
end

# elsif @card.images.length == 1
#     debugger
#     json.extract! @card, :id, :title, :description, :author_id, :list_id
#     json.imageUrls url_for(@card.images)