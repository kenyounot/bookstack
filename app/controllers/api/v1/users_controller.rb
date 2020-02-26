class Api::V1::UsersController < ApplicationController

  # dont check if the user is logged in before rendering
  # these actions as set in the application controller
  skip_before_action :authenticate_request

  # create user with the user_params passed in with request
  # if the user saves successfully then authenticate the user
  # which will encode that user to a jwt token to be passed
  # into the return json.
  def create
    @user = User.new(user_params)

    if @user.save
      @command = AuthenticateUser.call(@user.email, @user.password)

      render :show
    else
      render json: { error: @user.errors.full_messages }, :status => 422
    end
  end

  # check if the user params(credentials) match an existing user,
  # if it does then return a jwt token, if not render an error.
  def authenticate
    @command = AuthenticateUser.call(user_params[:email], user_params[:password])

    if @command.success?
      @user = User.find_by(email: user_params[:email])

      render :show
    else
      render json: { error: @command.errors }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
