class Product < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :favorite_collectors, through: :favorites, source: :user

    validates :title, presence: true, uniqueness: true
    validates :category, presence: true
    validates :description, length: { minimum: 5, maximum: 750 }

    before_save :capitalize_title

    private

    def capitalize_title
        self.title.capitalize!
    end
end
