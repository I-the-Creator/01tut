import ItemsList from './ItemsList';
 
const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {/* if items exist show the list */}
            {items.length ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                ) : (
                    /* if the list is empty show the message */
                    <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
                )}
        </main>
    );
};

export default Content;

