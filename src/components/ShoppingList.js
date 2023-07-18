import ListItem from './ListItem';

function ShoppingList({ list, handleDeleteItem }) {
  return (
    <ul className="list-inside list-none mt-3.5">
      {list?.map((item) => (
        <ListItem
          key={item.id}
          listItem={item}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
