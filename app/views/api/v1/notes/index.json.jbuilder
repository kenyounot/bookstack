json.notes @notes do |note|
  json.id note.id
  json.content note.content
  json.updated_at note.created_at.strftime("%b %e, %l:%M %p")
end
