class Api::V1::BooksController < ApplicationController
  def index
    @books = current_user.books

    render :index
  end

  def create
    @book = current_user.books.build(book_params.except(:note_content))

    if book_params[:note_content]
      @note = Note.new(content: book_params[:note_content])
      @book.notes << @note
    end

    if @book.save
      render :show
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end

  def update
    @book = Book.find_by(id: params[:id])

    if @book.update!(book_params.except(:note_content))
      render :show
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end


  def destroy
    @book = Book.find_by(id: params[:id])

    if @book.destroy
      render :destroy
    else
      render json: { error: @book.errors.full_messages }, :status => 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :summary, :author, :genre, :img_url, :note_content)
  end
end
