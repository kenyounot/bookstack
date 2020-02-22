json.book(@book, :id, :title, :summary, :author, :genre, :img_url)

json.notes(@book.notes, :id, :content, :updated_at) if !@book.notes.empty?
