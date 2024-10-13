import { create } from "zustand";

 export const useProductStore = create((set) => ({
    category:'Tops',
    setCategory : (cat) => set({category: cat})
}));

 export const useSearchStore = create((set) => ({
    fetchBySearch: true,
    searchValue: '',
    setSearchValue : (val) => set({searchValue: val}),
    setFetchBySearch : (val) => set({fetchBySearch: val}),

}));


export const useCartStore = create((set)=>({
    cartProduct:[],
    setCartProducts : (val)=> set((state)=>({cartProduct:[...state.cartProduct,val]})),
    setClearCart: (val) => set({cartProduct:val})
}));

export const useOrderStore = create((set)=>({
    orderProduct:[],
    setOrderProducts : (val)=> set((state)=>({orderProduct:[...state.orderProduct,...val]})),
}))

export const usePlaceOrderStore = create((set)=>({
    checkoutProducts:[],
    setCheckoutProducts: (val)=> set(()=>({checkoutProducts:val}))
}))