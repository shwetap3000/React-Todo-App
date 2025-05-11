import Header from "./My Components/Header";
import Todo from "./My Components/Todo";
import Footer from "./My Components/Footer";
import React,{useState} from "react";
import AddTodos from "./My Components/AddTodos";


function App() {

  const addTodo = (title , desc) => {
    console.log("I am adding this todo" , title , desc);

    let sno;

    if (todos.length == 0) {
      sno = 0;
    }

    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
  }
  setTodos([...todos , myTodo]);
  console.log(myTodo);
  }

  const onDelete = (todo) => {
    console.log("I am on Delete" , todo);

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
  }

  const [todos , setTodos] = useState([ //empty array
    // {
    //   sno: 1,
    //   title: "Go to the Market",
    //   desc: "Job 1"
    // },

    // {
    //   sno: 2,
    //   title: "Go to the Mall",
    //   desc: "Job 2"
    // },

    // {
    //   sno: 3,
    //   title: "Go to the School",
    //   desc: "Job 3"
    // }
  ]);

  return (
    <div>
      <Header title="My Todo List" searchBar={false}/>
      <AddTodos addTodo={addTodo}/>
      <Todo todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  );
}

export default App;

