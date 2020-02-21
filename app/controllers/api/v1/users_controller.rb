class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, :except => [:profile]

  def create
    user = User.new(user_params)

    if user.save
      command = AuthenticateUser.call(user_params[:email], user_params[:password])
      render json: {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
        jwt: command.result,
      }
    end
  end

  def authenticate
    command = AuthenticateUser.call(user_params[:email], user_params[:password])

    if command.success?
      user = User.find_by(email: user_params[:email])
      render json: {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
        jwt: command.result,
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def profile
    @user = current_user

    render json: {
      user: {
        id: @user.id,
        name: @user.name,
        email: @user.email,
      },
    }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
