class ErrsController < ApplicationController

    def index
        errs = Err.all
        render json: errs , status: :ok
    end
    
end
