import { create } from 'zustand'

export const useStore = create((set) => ({
  darkMode: true,
  activeSection: 'home',
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
  setActiveSection: (section) => set({ activeSection: section }),
}))
