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

Profile.create(
    name: "Ms. Wang Wei Wei",
    position: "International Sales Director",
    company: "Shenzhen Yano Technology Co., Ltd.",
    address: "Bldg 4A, Caili Ind. Park, No. 228 Ind. Area, Henggang Town, Longgang District, Shenzhen, China",
    phone: "86-755-8950-0168 (Ext. 285)",
    fax: "86-755-8950-0167",
    email: "overseas@szyano.com",
    hotline: "86-755-8950-0168",
    about: "Shenzhen Yano Technology Co., Ltd. was founded in 2003 to serve the needs of the garment industry. From 2005 to 2008, it shifted its focus from  manufacturing sewing machine attachments to manufacturing industrial sewing machines. In 2009, Yano began investing millions of RMB into the research and development of automated machines before finally debuting the CNC Template Sewing Machine in 2012. By 2015, the CNC-TSM was well-known in the market for its precision and consistency, and in 2016, Yano expanded its team to Indonesia and Vietnam.//Today, Shenzhen Yano Technology Co., Ltd. specializes in providing integrated solutions for the garment industry. Their automated sewing and cutting machines have benefited manufacturers in clothing, footwear, car seats, furniture, leather goods, toys, and more by improving production efficiency and quality.//With great success in developing a variety of innovative products, JOOKE, the brand owned by Yano, continues to become a more recognized name in the industry. The company has also received recognition and funding both nationally and locally."
)

puts Cowsay.say("Generated #{Profile.count} profile", :ghostbusters)
