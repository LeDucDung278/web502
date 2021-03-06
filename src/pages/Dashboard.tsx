import React, { useEffect, useState } from 'react'
import { listcate } from '../api/category'
import { list } from '../api/product'
import { Category } from '../type/Category'
import { ProductType } from '../type/Product'

type Props = {
    
}

const Dashboard = (props: Props) => {
    const [products, setProducts] = useState<ProductType[]>([])
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data)
        }
        getProducts()
    }, [])
    const [cate, setCate] = useState<Category[]>([])
    useEffect(() => {
        const cate = async () => {
            const { data } = await listcate()
            setCate(data)
        }
        cate()
    }, [])
    return (
        <div className="flex flex-wrap bg-pink-500 ">
            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sản phẩm</h5>
                                <span className="font-semibold text-xl text-blueGray-700">{products.length}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                    <i className="fas fa-chart-bar" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up" /> 2,99% </span>
                            <span className="whitespace-nowrap"> Since last month </span></p>
                    </div>
                </div>
            </div>
            <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Danh mục</h5>
                                <span className="font-semibold text-xl text-blueGray-700">{cate.length}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                    <i className="fas fa-chart-pie" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down" /> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                <span className="font-semibold text-xl text-blueGray-700">901</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                    <i className="fas fa-users" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down" /> 1,25% </span>
                            <span className="whitespace-nowrap"> Since yesterday </span></p>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Doanh thu</h5>
                                <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                    <i className="fas fa-percent" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up" /> 12% </span>
                            <span className="whitespace-nowrap"> Since last mounth </span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard