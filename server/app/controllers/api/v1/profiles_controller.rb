class Api::V1::ProfilesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_profile
    before_action :authorize!, except: [:show]

    def update
        if @profile.update profile_params
            render json: { 
                id: @profile.id 
            }
        else
            render(
                json: { 
                    errors: @profile.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def show
        render json: @profile
    end

    private

    def find_profile
        @profile = Profile.find params[:id]
    end
    
    def profile_params
        params.require(:profile).permit(
            :name,
            :position,
            :company,
            :phone,
            :fax,
            :hotline,
            :email,
            :address,
            :about
        )
    end

    def authorize!
        unless can?(:crud, @profile)
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
