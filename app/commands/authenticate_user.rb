class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end

  # if user method returns a user then encode that user
  # to a jwt token.
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  # find user by email and return the user if they are authenticated
  # through Bcrypt.
  def user
    user = User.find_by_email(email)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, "invalid credentials"
    nil
  end
end
