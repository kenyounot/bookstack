class ApplicationController < ActionController::API
  # before user can request any other actions the user will be authenticated
  # if there is no token attached to the request, will render error
  before_action :authenticate_request, :except => [:fallback_index_html]

  # allows other controller actions to grab the current user with this method
  attr_reader :current_user

  # if this method is called from within the routes, will
  # render the index html during production.
  def fallback_index_html
    render :file => "public/index.html"
  end

  private

  # the method that check if user is authenticated
  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: "Not Authorized" }, status: 401 unless @current_user
  end
end
