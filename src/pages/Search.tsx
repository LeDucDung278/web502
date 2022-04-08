import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../api/product'
import { ProductType } from '../type/Product'

type Props = {}

const Search = (props: Props) => {
    const { search_value } = useParams()
    const [search_ilitial, setSearch] = useState<ProductType[]>([])

    useEffect(() => {
        const searchs = async () => {
            const { data } = await search(search_value)
            console.log(data)
            setSearch(data)
        }
        searchs()
    }, [search_value])

    return (
        <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium"> Tìm thấy <span className='font-bold text-2xl my-10'>"{search_ilitial.length}"</span>  sản phẩm </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {search_ilitial.map((item, index) => {
                    return (
                        <div key={index} className="group relative boder">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={item.img} alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`/product/${item._id}`}>
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {item.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">${item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search