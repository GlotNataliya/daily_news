class CreateNewscasts < ActiveRecord::Migration[6.1]
  def change
    create_table :newscasts do |t|
      t.string :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
