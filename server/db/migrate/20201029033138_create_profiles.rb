class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :position
      t.string :company
      t.string :phone
      t.string :fax
      t.string :hotline
      t.string :email
      t.string :address
      t.text :about

      t.timestamps
    end
  end
end
