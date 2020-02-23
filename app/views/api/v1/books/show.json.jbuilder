json.book(@book, :id, :title, :summary, :author, :genre, :img_url)

if !@book.notes.empty?
  json.notes @book.notes do |note|
    json.id note.id
    json.content note.content
    json.updated_at note.updated_at.strftime("%A, %d %B %Y %l:%M%p")
  end
end
