class SchoolsController < ApplicationController
  def index
    schools = School.all
    render json:
             schools.to_json(
               except: %i[
                 school_authorization_code
                 password
                 created_at
                 updated_at
               ],
             ),
           status: :ok
  end
end
