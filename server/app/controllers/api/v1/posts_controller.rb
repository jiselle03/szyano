class Api::V1::PostsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_post, only: [:show, :edit, :update, :destroy]
    
    def create
        post = Post.new post_params
        post.user = current_user
        if post.save
            render json: { 
                id: post.id 
            }
        else
            render(
                json: { 
                    errors: post.errors 
                },
                status: 422 #Unproceesable Entity
            )
        end
    end

    def index
        posts = Post.order(created_at: :desc)
        render json: posts
    end

    def show
        render json: @post
    end
    
    def update
        if @post.update post_params
            render json: { 
                id: @post.id 
            }
        else
            render(
                json: { 
                    errors: post.errors 
                },
                status: 422 #Unproceesable Entity
            )
        end
    end

    def destroy
        @post.destroy
        render json: { 
            status: 200 
        }, 
        status: 200
    end

    private

    def post_params
        params.require(:post).permit(
            :title, 
            :category, 
            :body
        )
    end

    def find_post
        @post = Post.find(params[:id])
    end
end
