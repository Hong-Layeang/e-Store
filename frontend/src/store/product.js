import { create } from 'zustand'
import { updateProduct } from '../../../backend/controllers/product.controller';

const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        const data = await res.json();
        set((state) => ({ products: [...state.products, data] }));
        return { success: true, message: "Product created successfully" };
    },
    
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
        return data;
    },

    deleteProduct: async(productID) => {
        const res = await fetch(`/api/products/${productID}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };
        
        // update the ui without refresh the page
        set((state) => ({ products: state.products.filter((product) => product._id !== productID) }));
        return { success: true, message: data.message };
    },

    updateProduct: async (productID, updatedProduct) => {
        const res = await fetch(`/api/products/${productID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        set(state => ({
            products: state.products.map(product =>
                product._id === productID ? data.data : product
            ),
        }));

        return { success: true, message: data.message };
    }

}));

export default useProductStore;
