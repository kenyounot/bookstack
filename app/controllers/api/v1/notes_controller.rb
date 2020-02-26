class Api::V1::NotesController < ApplicationController

  # create a note with the passed in note params.
  # if the note saves successfully, render the note view
  # if not render an error
  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  # render the notes only belonging to the book that matches
  # the id passed into the url. Also orders the notes by the time
  # they were created at in descending order.
  def index
    @book = Book.find_by(id: params[:id])
    @notes = @book.notes.order("created_at DESC").all

    if @notes
      render :index
    else
      render json: { error: @notes.errors.full_messages }, :status => 422
    end
  end

  # update note based on the note params passed in, if not
  # then render error view
  def update
    @note = Note.find_by(id: params[:id])

    if @note.update!(note_params)
      render :show
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  # find the note based on the id passed into the url,
  # then destroys that note, if it cant find note, render error
  def destroy
    @note = Note.find_by(id: params[:id])

    if @note.destroy
      render :destroy
    else
      render json: { error: @note.errors.full_messages }, :status => 422
    end
  end

  private

  # only permit certain params passed in from the request body to be passed in
  # to the called actions
  def note_params
    params.require(:note).permit(:content, :book_id)
  end
end
