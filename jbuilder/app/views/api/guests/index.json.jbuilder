# json.array! @guests, partial: 'api/guests/guest', as: :guest
  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
# end

json.array! @guests do |guest|
  next if guest.age < 40 || guest.age > 50
  json.extract! guest, :name, :age, :favorite_color
end
