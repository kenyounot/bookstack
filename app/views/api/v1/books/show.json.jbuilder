json.book(@book, :id, :title, :summary, :author, :genre, :img_url)

json.notes(@book.notes, :id, :content, :updated_at) if !@book.notes.empty?

json.notes @notes do |note|
  json.id note.id
  json.content note.content
  json.updated_at note.updated_at.strftime("%A, %d %B %Y %l:%M%p")
end