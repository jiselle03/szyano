class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :body, :created_at
end
