class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :company, :email, :phone

  has_many :favorites

  class FavoriteSerializer < ActiveModel::Serializer
    attributes :id, :product
  end
end
