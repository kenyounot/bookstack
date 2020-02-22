json.book(@book, :id)

json.notes(@book.notes, :id, :content, :updated_at) if !@book.notes.empty?

json.deleted :true
