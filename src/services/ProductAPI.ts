import axiosClient from './axiosClient';

const ProductAPI ={
    getProduct : (params: any) => {
        const url = "products?";
        return axiosClient.get(url,{params});
    },
    getDetail : (id: string) => {
        const url = "/products/"+id;
        return axiosClient.get(url);
    }
}
export default ProductAPI;