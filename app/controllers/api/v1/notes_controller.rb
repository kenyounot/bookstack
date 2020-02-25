class Api::V1::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  def index
    @book = Book.find_by(id: params[:id])
    @notes = @book.notes.order("updated_at DESC").all

    if @notes
      render :index
    else
      render json: { error: @notes.errors.full_messages }, :status => 422
    end
  end

  def update
    @note = Note.find_by(id: params[:id])

    if @note.update!(note_params)
      render :show
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])

    if @note.destroy
      render :destroy
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  private

  def note_params
    params.require(:note).permit(:content, :book_id)
  end
end
