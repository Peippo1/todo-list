import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [storeList, setStoreList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreList([...storeList, { name: currentTask }]);
    setCurrentTask("");
  };

  return (
    <div className="App">
      <h1>To-do list</h1>
      <div className="container-2">
        <form onSubmit={handleSubmit}>
          <TodoInput name={currentTask} func={setCurrentTask} />
          <button className="submit-button" type="submit">
            Add
          </button>
        </form>
        <List items={storeList} />
      </div>
    </div>
  );
};

const TodoInput = ({ name, func }) => (
  <input
    className="addTask"
    value={name}
    onChange={(e) => func(e.target.value)}
  />
);

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </ul>
  );
};

const ListItem = ({ item }) => {
  const [check, setCheck] = useState(false);

  return (
    <li className={`${check ? "list-item strike" : "list-item"}`}>
      <input type="checkbox" value={check} onChange={() => setCheck(!check)} />
      {item.name}
    </li>
  );
};

export default App;
