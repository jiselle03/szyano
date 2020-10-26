class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :category
      t.string :model_number
      t.text :description
      t.string :image1
      t.string :image2
      t.string :image3

      t.timestamps
    end
  end
end
