import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  const handlerCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handlerDelete = (id) => {
    const removeItem = items.filter(item => item.id !== id)
    setItems(removeItem)
  }

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
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
