class Post < ApplicationRecord
    # has_many :comments, dependent: destroy
    # has_many :likes, dependent: :destroy
    # has_many :likers, through: :likes, source: :user
    # has_many :taggings, dependent: :destroy
    # has_many :tags, through: :taggings
  
    validates :title, presence: true, uniqueness: true
    validates :category, presence: true
    validates :body, length: { minimum: 100 }
  
    before_save :capitalize_title
  
    private
  
    def capitalize_title
        self.title.capitalize!
    end
  end
  