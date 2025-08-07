import { create } from 'zustand';
import items from './items';

export const usePackingStore = create((set, get) => ({
  // 状态
  items: [],
  isFilter: false,
  loading: true,

  // 操作方法
  toggleItem: (itemId) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === itemId 
          ? { ...item, isPacked: !item.isPacked }
          : item
      )
    }));
  },

  toggleFilter: () => {
    set((state) => ({ isFilter: !state.isFilter }));
  },

  addItem: (name) => {
    const newItem = {
      id: Date.now(),
      name,
      isPacked: false
    };
    set((state) => ({
      items: [...state.items, newItem]
    }));
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== itemId)
    }));
  },

  clearCompleted: () => {
    set((state) => ({
      items: state.items.filter(item => !item.isPacked)
    }));
  },

  // 异步获取数据
  fetchItems: async () => {
    set({ loading: true });
    
    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟从后端获取数据
    set({ items: items, loading: false });
  },

  // 选择器函数
  getFilteredItems: () => {
    const { items, isFilter } = get();
    return isFilter ? items.filter(item => !item.isPacked) : items;
  },

  getStats: () => {
    const { items } = get();
    const total = items.length;
    const packed = items.filter(item => item.isPacked).length;
    const unpacked = total - packed;
    
    return { total, packed, unpacked };
  }
})); 