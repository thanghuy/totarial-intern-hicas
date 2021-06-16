import axiosClient from './axiosClient';

const CartAPI = {
    getCart : (id: string) =>{
        const url = "cart/"+id;
        return axiosClient.get(url);
    },
    addCart : (data: object) => {
        const url = "cart";
        return axiosClient.post(url,data);
    },
    updateCartItem : (data: Object,idCart: string) => {
        const url = "cart/"+idCart;
        return axiosClient.put(url,data);
    },
    deleteCartItem : (idCart: string,idUser: string) => {
        const url = "cart/"+idCart+"/"+idUser;
        return axiosClient.delete(url);
    }
}
export default CartAPI;