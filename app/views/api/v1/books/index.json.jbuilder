json.books @books do |book|
  json.id book.id
  json.title book.title
  json.summary book.summary
  json.author book.author
  json.genre book.genre
  json.img_url book.img_url
end
