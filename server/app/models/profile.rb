class Profile < ApplicationRecord
    validates :name, presence: true
    validates :company, presence: true
    validates :position, presence: true
    validates :phone, presence: true
    validates :fax, presence: true
    validates :email, presence: true
    validates :hotline, presence: true
    validates :about, presence: true, { minimum: 100}
end
