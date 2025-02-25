import React from "react";
import { GET } from "../api/todo/route";

const ToDoList = async () => {
  // const data=await fetch('http://localhost:3000/api/todo')
  const res = await GET();
  const { data: todos } = await res.json();
  
  return (
    <>
      {todos.map((t) => (
        <li key={t._id}>{t.title}</li>
      ))}
    </>
  );
};

export default ToDoList;
