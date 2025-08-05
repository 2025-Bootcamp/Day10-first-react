import styles from './PackingList.module.css';

export default function Item({ name, isPacked, onToggle }) {
  // 使用 CSS 模块动态生成 className
  const itemClassName = `${styles.item} ${isPacked ? styles.checked : ''}`;

  return (
    <li className={itemClassName}>
      <label>
        <input 
          type="checkbox" 
          checked={isPacked} 
          onChange={onToggle}
        />
        {name} {isPacked && '✅'}
      </label>
    </li>
  );
}