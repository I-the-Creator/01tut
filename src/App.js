import { useState } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';


function App() {
  
  // items state and default list values
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,   // check sign enabled
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    /* iterate on items and check if item.id === id that got from input then create new object
    equal to original (using spread operator) and flip the current checked property value (!item.checked),
    otherwise return the current 'item' w/o changes
    */
    const listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked } : item);
    // send new listItem array to state via setItems
    setItems(listItems);
    // save state value to localStorage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    /*use filter method - it creates new filtered array 
        filter out the items that have item.id == id,
        other items added to new array = listItems
    */
    const listItems = items.filter((item) => item.id !== id);
    // send new listItem array to state via setItems
    setItems(listItems);
    // save state value to localStorage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  
  return (
    <div className="App">

      {/* send the 'title' prop to Header - props drilling */}
      <Header title="Grocery List" />
       {/* send the 'items' and handler-functions props to Content - props drilling */}
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
