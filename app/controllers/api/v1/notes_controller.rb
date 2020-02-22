class Api::V1::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  def update
  end

  def delete
  end

  private

  def note_params
    params.require(:note).permit(:content, :book_id)
  end
end
