import React from "react";
import { useState } from "react/cjs/react.development";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);

  //הפונקציה הזאת מוסיפה למערך
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //יש כאן את המערך הישן והפרמטר שאנחנו מקבלים מהפונקציה
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  // הפונקציה הזאת מעדכנת את הערך אם המשתמש רוצה לשנות אותו
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // לוקח את הפרמטר הקודם ממפה מחפש אם יש התאמה לטודו איי די אם יש אז הסט טודו מקבל ניו וואליו
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // הפונקציה הזאת מורידה את הטודו מהרשימה
  const removeTodo = (id) => {
    // מורידה את את הטודו מהרשימה על ידי פילטר אם האיידי לא שווה
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Tasks</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        compelteTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
