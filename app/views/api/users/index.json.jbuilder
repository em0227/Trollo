# require 'byebug'
# byebug
@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :name
    end
end