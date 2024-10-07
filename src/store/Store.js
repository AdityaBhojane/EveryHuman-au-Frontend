import { create } from "zustand";

 export const useProductStore = create((set) => ({
    category:'Tops',
    setCategory : (cat) => set({category: cat})
}))