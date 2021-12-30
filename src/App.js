import { useState, useEffect } from 'react';

import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';

function App() {

  const API_URL = 'http://localhost:3500/items';

  // items state and default list values

/*  set localstorgae value or empty array if local storage is empty, as default. 
    w/o it filter won't work as undefined will be sent into filter */
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); 
  const [items, setItems] = useState([]);
  
  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);  // state to control process of Loading data from server and showing Content


/*every time the component renders useEffect is running if it has no dependency, 
  otherwise (with empty dep array) it starts only once immediately when the app loads, or if dependency array is not empty
   - useEffect runs each time when data in this dependency changes.
  useEffect runs after page is rendered - it's async function */
  // useEffect(() => {
  //   localStorage.setItem('shoppinglist', JSON.stringify(items)); // save the data to localStorage each time the "items" changed
  // }, [items]);

  useEffect(() => {

    const fetchItems = async () => {   // function called into action once on application start, as dependency array is empty
      try {
        const response = await fetch(API_URL);

        /* normally response errors wouldn't be caught by catch function,
        to workaround it use 'throw Error' in case of response issue and it will be caught*/
        if(!response.ok) throw Error('Did not receive expected data'); 

        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);  // reset fetchError after successful request, as previously we might have had error

      } catch (err) {  // catch the error and set the fetchError state - and show it before 'Content' part in <main>
          setFetchError(err.message);
      } finally {  // after loading complete with or without error set the isLoading state to false
        setIsLoading(false);
      }
    }

    // to emulate server request delay
    setTimeout(() => {  
      fetchItems();  // as fetchItems() does not return a value we can just call it w/o IIFE
      // (async () => await fetchItems())();  
    }, 2000)

  }, [])



  const addItem = (item) => {

    //item construction
    /*  check the id and set the value for new item
    if other items exist, get the last element id and increment it by 1, otherwise just set into 1 */
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };
    // add new item into the array; create new array listItem - spread existing items and add new
    const listItems = [...items, myNewItem];

    // call the setAItems and pass there array 'listItems' - updated after changes
    setItems(listItems);
  }

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    /* iterate on items and check if item.id === id that got from input then create new object
    equal to original (using spread operator) and flip the current checked property value (!item.checked),
    otherwise return the current 'item' w/o changes
    */
    const listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked } : item);

      // call the setAItems and pass there array 'listItems' - updated after changes
    setItems(listItems);
  }

  const handleDelete = (id) => {
    /*use filter method - it creates new filtered array 
        filter out the items that have item.id == id,
        other items added to new array = listItems
    */
    const listItems = items.filter((item) => item.id !== id);

    // call the setAItems and pass there array 'listItems' - updated after changes
    setItems(listItems);
  }

  const handleSubmit = (event) => {
    // disable default behavior on submit (page reload, etc)
    event.preventDefault();
    if(!newItem) return;
    // add Item - with newItem state as a parameter
    addItem(newItem);
    // reset state value after submit. it's deleting previous input
    setNewItem('');
  }
  
  return (
    <div className="App">

      {/* send the 'title' prop to Header - props drilling */}
      <Header title="Grocery List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* Search component - sending props to SearchItem*/}
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {/* short-circuit:  if isLoading is true show the message in <p> */}
        {isLoading && <p>Loading Items...</p>}

        {/* short-circuit:  if fetchError exist put the right part of the expression into <main> */}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}

        {/* send the 'items' and handler-functions props to Content - props drilling */}
        {/* short-circuit: if there is no fetchError and isLoading is 'false' - 'Content' will be shown */}
        {!fetchError && !isLoading && <Content 
        // add filtering by 'search input' value - with lowering case 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}  // get the data from 'items' array
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
