class Api::V1::BooksController < ApplicationController

  # return current users books
  def index
    @books = current_user.books

    if @books
      render :index
    end
  end

  # take the book params, and create a book that belongs to the user
  # if the book saves to the database successfully then render the show
  # view, or render an error.
  def create
    @book = current_user.books.build(book_params)
    if @book.save
      render :show
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end

  # update a book based on passed in book params, if it successfully updates,
  # render the show view, if not render error.
  def update
    @book = Book.find_by(id: params[:id])

    if @book.update!(book_params)
      render :show
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end

  # take id passed in as param in url and find the book
  # if the book exists, then destroy the book. 
  def destroy
    @book = Book.find_by(id: params[:id])

    if @book.destroy
      render :destroy
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end

  private

  # only permit certain params passed in from the request body to be passed in
  # to the called actions
  def book_params
    params.require(:book).permit(:title, :summary, :author, :genre, :img_url)
  end
end
