import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))

  }
  const [todos, setTodos] = useState( [
    {
      sno : 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno : 2,
      title: "Learn React",
      desc: "You need to go to the market"
    },
    {
      sno : 3,
      title: "Make resume",
      desc: "You need to go to the market"
    },
  ]);

  return (
    <>
    <Header title = "My Todos List" searchBar = {false}/>
    <AddTodo/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
