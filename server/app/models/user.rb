class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :favorited_products, through: :favorites, source: :product
    
    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    
    has_secure_password
end
