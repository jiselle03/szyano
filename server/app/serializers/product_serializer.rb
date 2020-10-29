class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :model_number, :description, :image1, :image2, :image3, :created_at
end
