class Api::V1::ProductsController < ApplicationController
    before_action :authenticate_user!
    before_action :find_product, only: [:update, :show, :destroy]
    before_action :authorize!, except: [:index, :show]

    def create
        Cloudinary::Uploader.upload(params[:image1], params[:image2], params[:image3])
        product = Product.new product_params
        
        if product.save
            render json: { 
                id: product.id 
            }
        else
            render(
                json: { errors: product.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def update
        if @product.update product_params
            render json: { 
                id: @product.id 
            }
        else
            render(
                json: { 
                    errors: @product.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def index
        products = Product.all
        render json: products
    end

    def show
        render json: @product
    end

    def destroy
        @product.destroy
        # Cloudinary::Uploader.destroy(id)

        render(
            json: { 
                status: 200 
            }, 
            status: 200
        ) 
    end

    private

    def find_product
        @product = Product.find params[:id]
    end
    
    def product_params
        params.require(:product).permit(
            :title,
            :category,
            :description,
            :model_number,
            :image1["url"],
            :image2["url"],
            :image3["url"]
        )
    end

    def authorize!
        unless can?(:crud, @product)
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
