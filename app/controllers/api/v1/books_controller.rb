class Api::V1::BooksController < ApplicationController
  def index
    @books = current_user.books

    render :index
  end

  def create
  end

  def update
  end

  def delete
  end

  private

  def books_params
    params.require(:book).permit(:title, :summary, :author, :genre, :note_id)
  end
end
