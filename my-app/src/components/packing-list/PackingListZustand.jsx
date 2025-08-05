import { useState } from 'react';
import { usePackingStore } from './packingStore';
import styles from './PackingList.module.css';

// 简化的 Item 组件
function Item({ id, name, isPacked }) {
  const toggleItem = usePackingStore(state => state.toggleItem);

  const itemClassName = `${styles.item} ${isPacked ? styles.checked : ''}`;

  return (
    <li className={itemClassName}>
      <label>
        <input 
          type="checkbox" 
          checked={isPacked} 
          onChange={() => toggleItem(id)}
        />
        {name} {isPacked && '✅'}
      </label>
    </li>
  );
}

// 统计组件
function Stats() {
  const getStats = usePackingStore(state => state.getStats);
  const stats = getStats();
  
  return (
    <div className={styles.stats}>
      <span>总计: {stats.total}</span>
      <span>已打包: {stats.packed}</span>
      <span>未打包: {stats.unpacked}</span>
    </div>
  );
}

// 添加物品组件
function AddItem() {
  const addItem = usePackingStore(state => state.addItem);
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addItem(newItemName.trim());
      setNewItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addForm}>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="添加新物品..."
        className={styles.addInput}
      />
      <button type="submit" className={styles.addButton}>
        添加
      </button>
    </form>
  );
}

// 操作按钮组件
function ActionButtons() {
  const clearCompleted = usePackingStore(state => state.clearCompleted);
  const getStats = usePackingStore(state => state.getStats);
  const stats = getStats();

  return (
    <div className={styles.actions}>
      {stats.packed > 0 && (
        <button 
          onClick={clearCompleted}
          className={styles.clearButton}
        >
          清除已完成的 ({stats.packed})
        </button>
      )}
    </div>
  );
}

// 主组件
export default function PackingListZustand() {
  // 从 store 获取状态和方法
  const { 
    isFilter, 
    toggleFilter 
  } = usePackingStore();
  
  const getFilteredItems = usePackingStore(state => state.getFilteredItems);
  const filteredItems = getFilteredItems();

  return (
    <section className={styles.container}>
      <h1>Sally Ride 的行李清单 (Zustand 版本)</h1>
      
      <Stats />
      
      <div className={styles.filterSection}>
        <label>
          <input 
            type="checkbox" 
            checked={isFilter} 
            onChange={toggleFilter}
          /> 
          过滤已打包的物品
        </label>
      </div>

      <AddItem />
      
      <ul className={styles.itemList}>
        {filteredItems.map(item => (
          <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            isPacked={item.isPacked}
          />
        ))}
      </ul>

      <ActionButtons />
    </section>
  );
} 