class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :company, :email, :phone, :role, :created_at, :updated_at

  # has_many :favorites
end
