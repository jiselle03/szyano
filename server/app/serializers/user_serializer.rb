class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :created_at, :updated_at

  # has_many :favorites
end
