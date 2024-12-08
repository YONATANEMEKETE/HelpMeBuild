import { create } from 'zustand';

interface storeState {
  color: string;
  setColor: (color: string) => void;
}

const useColor = create<storeState>((set) => ({
  color: '#21211f',
  setColor: (color) => set({ color }),
}));

export default useColor;
