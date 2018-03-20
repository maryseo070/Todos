class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :body, null: false
      t.string :title, null: false
      t.boolean :done, null: false, default: false
    end
    add_index :todos, :title
  end
end
