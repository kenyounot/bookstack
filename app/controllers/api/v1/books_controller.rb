class Api::V1::BooksController < ApplicationController
  def index
    @books = current_user.Books.a
  end

  def create
  end

  def update
  end

  def delete
  end

  private

  def books_params
    params.require(:book).permit(:title, :summary, :user_id, :author_id, :genre_id, :note_id)
  end
end
