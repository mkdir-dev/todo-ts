import React, { useRef } from 'react';

interface TodoFormProps {
  addTodo(todo: string): void
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const refTodo = useRef<HTMLInputElement>(null);

  const handleKeyPress = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      addTodo(refTodo.current!.value);

      refTodo.current!.value = '';
    }
  };

  return (
    <section className="input-field mt2">
      <input
        ref={refTodo}
        onKeyPress={handleKeyPress}
        type="text"
        id="todo"
        placeholder="Задача"
      />
      <label htmlFor="todo" className="active">
        Что нужно сделать?
      </label>
    </section>
  );
}

export default TodoForm;
