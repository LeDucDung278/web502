import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getone } from '../api/category';
import { ProductType } from '../type/Product';

type Props = {}

const CategoryList = (props: Props) => {
    const { id } = useParams();
    console.log(id)
    const [cate, getcate] = useState<ProductType[]>([])
    useEffect(() => {
        const category = async () => {
            const { data } = await getone(id)
            console.log(data)
            getcate(data)
        }
        category()
    }, [])
    return (

        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
      <span className="mt-3 text-sm text-gray-500">200+ Products</span> */}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {cate?.map((item, index) => {
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

export default CategoryList