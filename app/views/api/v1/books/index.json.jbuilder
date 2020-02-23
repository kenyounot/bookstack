json.books @books do |book|
  json.id book.id
  json.title book.title
  json.summary book.summary
  json.author book.author
  json.genre book.genre
  json.img book.img_url

  if !book.notes.empty?
    json.notes book.notes do |note|
      json.id note.id
      json.content note.content
      json.updated_at note.updated_at.strftime("%A, %d %B %Y %l:%M%p")
    end
  end
end
