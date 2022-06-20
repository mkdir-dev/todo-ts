import React, { useState, useEffect } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { ITodo } from '../../interfaces/interfaces';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (todo: string) => {
    console.log('Add new todo: ', todo);

    const newTodo: ITodo = {
      title: todo,
      id: Date.now(),
      completed: false,
    }

    setTodos(prev => [newTodo, ...todos]);
  };

  const hanldeCheckedTodo = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo
    }))
  }

  const hanldeRemoveTodo = (id: number) => {
    const confirmRemove = confirm('Удаление дела из списка. Вы уверены?')

    if (confirmRemove) {
      setTodos(prev => prev.filter((todo) => todo.id !== id))
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  return (
    <>
      <TodoForm
        addTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onChecked={hanldeCheckedTodo}
        onRemove={hanldeRemoveTodo}
      />
    </>
  );
}

export default TodosPage;
