import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../type/Product'

type ProductManagerProps = {
    products: ProductType[]
    onRemove :(id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div className="bg-white shadow-md rounded ">
            <a href="/" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Thêm mới</a>
            <table className="min-w-max w-full table-auto mt-3">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-2 text-center">Stt</th>
                        <th className="py-3 px-6 text-left">Ảnh</th>
                        <th className="py-3 px-6 text-left max-w-xs max-h-14 line-clamp-2">Tên</th>
                        <th className="py-3 px-6 text-center">Giá</th>
                        <th className="py-3 px-6 text-center">Số lượng</th>
                        <th className="py-3 px-6 text-center max-w-xs max-h-14 line-clamp-2">Mô tả</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {props.products?.map((item, index) => {
                        return (
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-center">
                                    <span>{index++}</span>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img className="w-14 h-14" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80${pro.img}" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left max-w-xs max-h-14 line-clamp-2">
                                    <span className="font-semibold">{item.name}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>{item.price}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>45</span>
                                </td>
                                <td className="py-3 px-6 text-left max-w-xs h-14 line-clamp-2">
                                    <span className="text-justify h-14">{item.desc}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <Link to={`/admin/product/${item.id}/edit`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg onClick={() => props.onRemove(item.id)} className="remove" data-id="${pro.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}

export default ProductManager