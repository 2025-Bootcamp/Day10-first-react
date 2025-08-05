import { useState } from 'react'
import items from './items';

function Item({ name, isPacked }) {
  return <li className="item">{name} {isPacked && '✅'}</li>;
}

export default function PackingList() {
  const [isFilter, setIsFilter] = useState(false);
  // 过滤掉已打包的物品
  const filteredItems = isFilter ? items.filter(item => !item.isPacked) : items;

  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <label>
        <input type="checkbox" checked={isFilter} onChange={() => setIsFilter(!isFilter)} /> 过滤已打包的物品
      </label>
      <ul>
        {filteredItems.map(item => (
          <Item 
            key={item.id}
            isPacked={item.isPacked} 
            name={item.name} 
          />
        ))}
      </ul>
    </section>
  );
}
