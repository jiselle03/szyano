# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"  

User.destroy_all()
Product.destroy_all()
Post.destroy_all()

super_user = User.create( 
    first_name: "Hermione",
    last_name: "Granger",
    company: "Hogwarts School of Witchcraft & Wizardry",
    email: "hermione@hogwarts.edu", 
    phone: "(123) 456-7890",
    password: PASSWORD,
    role: "admin"
)

puts Cowsay.say("Generated #{User.count} users.", :tux)

10.times do 
    Product.create( 
        title: Faker::Commerce.product_name,
        category: Faker::Commerce.department(max: 2, fixed_amount: true),
        description: Faker::Movies::HarryPotter.quote,
        model_number: Faker::IDNumber.spanish_foreign_citizen_number,
        created_at: Faker::Date.backward(days:365 * 5)
    )  
end 

products = Product.all
puts Cowsay.say("Generated #{Product.count} products", :frogs)

categories = ["company", "general"]

10.times do
    Post.create(
        title: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4),
        category: categories[rand(0..1)],
        body: Faker::Lorem.paragraphs(number: 3),
        created_at: Faker::Date.backward(days: 365 * 5)
    )
end

puts Cowsay.say("Generated #{Post.count} posts", :dragon)
