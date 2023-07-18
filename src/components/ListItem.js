import { useState } from 'react';
import { PiCheckCircleThin, PiCheckThin } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

function ListItem({ listItem, handleDeleteItem }) {
  const [checked, setChecked] = useState(false);

  const { id, item } = listItem;

  return (
    <li
      className={`flex items-center ${
        checked && 'line-through text-slate-400'
      }`}
    >
      <button onClick={() => setChecked(!checked)}>
        {checked ? <PiCheckThin /> : <PiCheckCircleThin />}
      </button>
      {item}
      <button onClick={() => handleDeleteItem(id)}>
        <RxCross2 />
      </button>
    </li>
  );
}

export default ListItem;
