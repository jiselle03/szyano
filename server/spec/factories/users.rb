FactoryBot.define do
  factory :user do
    first_name { "MyString" }
    last_name { "MyString" }
    company { "MyString" }
    email { "MyString" }
    phone { "MyString" }
    role { "MyString" }
    password_digest { "MyString" }
  end
end
