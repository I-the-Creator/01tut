import { FaPlus } from 'react-icons/fa';

// get the props from App.js
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        // on form submit call the handleSubmit function
        <form className="addForm" onSubmit={handleSubmit}>
            {/* label will be hidden */}
            <label htmlFor='addItem'>Add Item</label>

            <input 
                autoFocus
                id='addItems'
                type='text'
                placeholder='Add Item'
                required
                // put the prop into controlled input - this is the typed text - get the value from state
                value={newItem}
                //change the state newItem passing event.target.value into setNewItem - pass to App.js and change it
                onChange={(event) => setNewItem(event.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem