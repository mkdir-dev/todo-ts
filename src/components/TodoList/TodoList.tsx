import React from 'react';

import { ITodo } from '../../interfaces/interfaces';

type TodoListProps = {
  todos: ITodo[]
  onChecked(id: number): void
  onRemove(id: number): void
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onChecked,
  onRemove,
}) => {
  const hanldeRemoveTodo = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();

    onRemove(id)
  };

  if (todos.length === 0) {
    return <p className='center'>Дел нет, отдыхаем!</p>
  }

  return (
    <section>
      <ul>
        {todos.map((todo) => {
          const classes = ['todo']

          if (todo.completed) {
            classes.push('completed');
          }

          return (
            <li
              key={todo.id}
              className={classes.join(' ')}
            >
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onChecked.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  className="material-icons red-text"
                  onClick={(evt) => hanldeRemoveTodo(evt, todo.id)}
                >
                  delete
                </i>
              </label>
            </li>)
        })}
      </ul>
    </section>
  );
}

export default TodoList;
