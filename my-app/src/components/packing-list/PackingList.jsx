import { useState } from 'react'
import items from './items';
import Item from './Item.jsx';
import styles from './PackingList.module.css';


export default function PackingList() {
  const [isFilter, setIsFilter] = useState(false);
  const [packingItems, setPackingItems] = useState(items);
  // 过滤掉已打包的物品
  const filteredItems = isFilter ? packingItems.filter(item => !item.isPacked) : packingItems;

  const handleItemToggle = (itemId, newIsPacked) => {
    setPackingItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, isPacked: newIsPacked } : item
      )
    );
  };

  return (
    <section className={styles.container}>
      <h1>Sally Ride 的行李清单</h1>
      <div className={styles.filterSection}>
        <label>
          <input 
            type="checkbox" 
            checked={isFilter} 
            onChange={() => setIsFilter(!isFilter)} 
          /> 
          过滤已打包的物品
        </label>
      </div>
      <ul className={styles.itemList}>
        {filteredItems.map(item => (
          <Item 
            key={item.id}
            isPacked={item.isPacked} 
            name={item.name}
            onToggle={() => handleItemToggle(item.id, !item.isPacked)}
          />
        ))}
      </ul>
    </section>
  );
}
