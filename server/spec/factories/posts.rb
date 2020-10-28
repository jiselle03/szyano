FactoryBot.define do
  factory :post do
    title { "MyString" }
    category { "MyString" }
    body { "MyText" }
    user { nil }
  end
end
