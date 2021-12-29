class SubjectsController < ApplicationController

    def index
        subjects = Subject.all
        render json: subjects.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end

end
