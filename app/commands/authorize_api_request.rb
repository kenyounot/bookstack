class AuthorizeApiRequest
  prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_reader :headers


  # if there is a decoded auth token, take the user info and find the user
  # in the DB if user isnt already declared. Then return the user unless there
  # are errors, then return that. 
  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.add(:token, "Jwt Token Not Valid") && nil
  end

  # takes the token returned from the decoded auth token and
  # decode it, store the token in an instance variable.
  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  # checks if there is an authorization header in the request
  # if there is split the bearer out of the string and then return
  # the token
  def http_auth_header
    if headers["Authorization"].present?
      return headers["Authorization"].split(" ").last
    else
      errors.add(:token, "Missing token")
    end
    nil
  end
end
