import { create } from "zustand";

export const useProductStore = create((set) => ({
  category: "Tops",
  setCategory: (cat) => set({ category: cat }),
}));

export const useSearchStore = create((set) => ({
  fetchBySearch: true,
  searchValue: "",
  setSearchValue: (val) => set({ searchValue: val }),
  setFetchBySearch: (val) => set({ fetchBySearch: val }),
}));

export const useCartStore = create((set) => ({
  cartProduct: [],
  setCartProducts: (val) =>
    set((state) => ({ cartProduct: [...state.cartProduct, val] })),
  setClearCart: (val) => set({ cartProduct: val }),
}));

export const useOrderStore = create((set) => {
  const initialData = JSON.parse(localStorage.getItem("orderProduct")) || [];

  return {
    orderProduct: initialData,
    setOrderProducts: (val) =>
      set((state) => {
        const updateStorage = [...state.orderProduct, ...val];
        localStorage.setItem("orderProduct", JSON.stringify(updateStorage));
        return { orderProduct: updateStorage };
      }),

    setStatus: (id, num, text) =>
      set((state) => {
        const updatedOrderProducts = [...state.orderProduct];
        updatedOrderProducts[id].status.currentStatus = num;
        updatedOrderProducts[id].status.value = text;

        localStorage.setItem(
          "orderProduct",
          JSON.stringify(updatedOrderProducts)
        );

        return { orderProduct: updatedOrderProducts };
      }),

    setCancellation: (id, refund, cancel, reject=false) =>
      set((state) => {
        const updatedOrderProducts = [...state.orderProduct];
        updatedOrderProducts[id].status.refundRequest = refund;
        updatedOrderProducts[id].status.cancelRequest = cancel;
        updatedOrderProducts[id].status.requestRejected = reject;

        localStorage.setItem(
          "orderProduct",
          JSON.stringify(updatedOrderProducts)
        );

        return { orderProduct: updatedOrderProducts };
      }),

    clearStorage: () => localStorage.clear(),
  };
});



export const usePlaceOrderStore = create((set) => ({
  checkoutProducts: [],
  setCheckoutProducts: (val) => set(() => ({ checkoutProducts: val })),
}));

export const useProductDetailsStore = create((set) => ({
  ProductDetails: [],
  setProductDetails: (val) => set(() => ({ ProductDetails: val })),
}));

export const useAdminStore = create((set) => {
    const initialStatus =
      JSON.parse(localStorage.getItem("DelhiveryStatus")) || [];
  
    return {
      DelhiveryStatus: initialStatus,
      setDelhiveryStatus: (val) =>
        set((state) => {
          const updateStatus = [...state.DelhiveryStatus, ...val];
          localStorage.setItem("DelhiveryStatus", JSON.stringify(updateStatus));
          return { DelhiveryStatus: updateStatus }; 
        }),
    };
  });