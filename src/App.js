 import './App.css';
 import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]) 

  function onSubmit(e) {
    e.preventDefault()
    let item = document.querySelector("#item").value
    const newItems = [...items, item]
    setItems(newItems)
    // console.log(items)
  }

  function onDeleteItem(index) {
    items.splice(index, 1)
    const newItems = items.slice()
    setItems(newItems)
    // console.log(newItems, index)
  }

  return (
    <>
    <div className="App">
      <h1>Project 4: Shopping List</h1>
      <div className="shopping-list-container">
        <h2>Items to buy</h2>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" id="item" name="item" placeholder="Add a new item"></input>
          <button type='submit'>Add</button>
        </form>
        <ul className="items-list">
          {
            items.map((item, index) => {
              return <Item item={item} index={index} key={item + index} deleteItem={onDeleteItem} />
            })
          }
        </ul>
      </div>
    </div>
    </>
  );

}

function Item({ item, index , deleteItem }) {
  return (
    <li>
      { item }
      <button className='delete-btn' onClick={() => { deleteItem(index)} }>X</button>
    </li>
  )
}

export default App;
