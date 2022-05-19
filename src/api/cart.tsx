import instance from "./instance";
export const addtocart = (cart: any) =>{
    const url = `/cart`
    return instance.post(url,cart)
}