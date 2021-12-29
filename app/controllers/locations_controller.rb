class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: locations.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end


end
