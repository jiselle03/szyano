class Api::V1::FavoritesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_product, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        favorite = Favorite.new(user: current_user, product: @product)
    end

    def destroy
        favorite = current_user.favorites.find params[:id]
        if can? :destroy, favorite
            favorite.destroy
        end
    end

    private

    def find_product
        @product = Product.find params[:product_id]
    end

    def authorize!
        unless can? :favorite, @product
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
