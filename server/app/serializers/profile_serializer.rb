class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :company, :phone, :email, :hotline, :address, :about
end
