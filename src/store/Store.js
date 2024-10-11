import { create } from "zustand";

 export const useProductStore = create((set) => ({
    category:'Tops',
    setCategory : (cat) => set({category: cat})
}))

 export const useSearchStore = create((set) => ({
    fetchBySearch: true,
    searchValue: '',
    setSearchValue : (val) => set({searchValue: val}),
    setFetchBySearch : (val) => set({fetchBySearch: val}),

}))