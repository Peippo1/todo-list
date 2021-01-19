import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [currentItem, setCurrentItem] = useState ("");
  const [storeInput, setStoreInput] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreInput([...storeInput, setStoreInput, { item: currentItem}]);
    setCurrentItem("");
  };
return (
  <div>
    <form onSubmit={handleSubmit}>
      <TodoInput item={currentItem} func={setCurrentItem}/>
      <button type="submit">TREAT YO SELF</button>
    </form>
    <List items={storeInput}/>
  </div>
);

};

const TodoInput = ({ name, func }) => (
  <input value={name} onChange={(e) => func(e.target.value)}/>
);

const List = ({ items }) => (
    <ul>
      {items.map((item) => {
        return <ListItem item={item} />;
      })} 
    </ul>  
     );
    const ListItem = ({ item }) => {
    return (
      <li>
        {item.name},
      </li>
    );
  }

  export default App
// check box toggle on off