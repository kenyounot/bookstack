json.user(@user, :id, :name, :email)
if @command
  json.jwt @command.result
end
