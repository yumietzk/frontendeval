import React, { useState } from 'react';
import Search from './Search';
import ShoppingList from './ShoppingList';

const App = () => {
  const [list, setList] = useState([]); // {id, item}
  console.log(list);

  const handleList = (item) => {
    const id = list.length;
    const newItem = { id, item: item };
    setList([...list, newItem]);
  };

  const handleDeleteItem = (deleteId) => {
    const newList = list.filter((item) => item.id !== deleteId);
    setList(newList);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">My shopping list</h1>
      <Search handleList={handleList} />
      <ShoppingList list={list} handleDeleteItem={handleDeleteItem} />
    </>
  );
};

export default App;
