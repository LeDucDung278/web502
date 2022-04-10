import { ProductType } from "../type/Product"
import instance from "./instance"
import { isAuthenticate } from "../utils/localStorage";

const user = isAuthenticate()

export const list = () => {
    const url = `/products`
    return instance.get(url)
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const remove = (_id?: number | undefined) => {
    const url = `/products/${_id}/${user?.user._id}`
    return instance.delete(url,
        {
            headers: {
                "Authorization": `Bearer ${user?.token}`
            }
        })
}
export const create = (product: ProductType) => {
    const url = `/products/${user?.user._id}`
    return instance.post(url, product,
        {
            headers: {
                "Authorization": `Bearer ${user?.token}`
            }
        })
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}/${user?.user._id}`
    return instance.put(url, product,
        {
            headers: {
                "Authorization": `Bearer ${user?.token}`
            }
        })
}
export const search = (search_value: string | undefined) => {
    const url = `/search/?q=${search_value}`
    return instance.post(url)
}