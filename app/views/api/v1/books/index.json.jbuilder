json.books @books do |book|
  json.id book.id
  json.title book.title
  json.summary book.summary
  json.author book.author
  json.genre book.genre
  json.img book.img_url

  json.notes book.notes, :content, :id if !book.notes.empty?
end
