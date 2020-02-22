json.note do |json|
  json.id @note.id
  json.content @note.content
  json.updated_at @note.updated_at.strftime("%A, %d %B %Y %l:%M%p")
end
