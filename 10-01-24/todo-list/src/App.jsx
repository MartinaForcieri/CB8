import { useState } from "react";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
import { list } from "./mocks";
import "./App.css";

function App() {
  const [listData, setListData] = useState(list);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <AddTodoInput setListData={setListData} />
      <hr />
      <TodoList list={listData} setListData={setListData} />
    </div>
  );
}

export default App;
