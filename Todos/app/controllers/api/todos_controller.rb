class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    # sleep(3)
    @todos = Todo.all
    render json: @todos
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:todo][:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body, :title, :done)
  end
end
