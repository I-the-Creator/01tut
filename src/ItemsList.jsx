import LineItem from './LineItem';

// get the props from 'Content' component - parent
const ItemsList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (  // iterate on items array
                <LineItem
                    key={item.id}  // unique key for child in list as ListItem is child in <ul>
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default ItemsList;