import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const handlerCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    setAndSaveItems(listItems)
  }

  const handlerDelete = (id) => {
    const removeItem = items.filter(item => item.id !== id)
    setItems(removeItem)
    setAndSaveItems(removeItem)
  }

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItems(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Todo List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items}
        search={search}
        setItems={setItems}
        handlerCheck={handlerCheck}
        handlerDelete={handlerDelete}
      />

      <Footer length={items.length}
      />
    </div>
  );
}

export default App;
