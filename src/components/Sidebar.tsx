import React, { useEffect, useState } from 'react'
import { listcate } from '../api/category'
import { Category } from '../type/Category'

type Props = {}

const Sidebar = (props: Props) => {
    const [cate, setCate] = useState<Category[]>([])
    useEffect(() => {
        const cate = async () => {
            const { data } = await listcate()
            setCate(data)
        }
        cate()
    }, [])
    return (
        <aside className="z-20 hidden w-full bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="pb-4 text-gray-500 dark:text-gray-400 bg-gray-800 mt-5">
                <ul className="bg-gray-200">
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    {cate?.map((item, index) => {
                        return (
                            <li key={index} className="relative px-6 py-3">
                                <a href={`product/category/${item._id}`} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <span className="ml-4">{item.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar