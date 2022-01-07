class Api::SubjectsController < ApplicationController
  def index
    subjects = Subject.all
    render json: subjects, status: :ok
  end
end
