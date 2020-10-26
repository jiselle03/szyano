class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates(
    :product_id, 
    uniqueness: {
      scope: :user_id,
      message: "You have already favorited this."
    }
  )
end
