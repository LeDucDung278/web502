import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { listcate } from '../api/category'
import { read } from '../api/product'
import { Category } from '../type/Category'
import { ProductType } from '../type/Product'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    quantity: number
    desc: string,
    category: string
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            reset(data)
        }
        getProduct()
    }, []);

    const [cate, setCate] = useState<Category[]>([])
    useEffect(() => {
        const cate = async () => {
            const { data } = await listcate()
            setCate(data)
        }
        cate()
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        console.log(data);

        navigate("/admin/product")
    }
    return (
        <div className="bg-white">
            <h1 className="text-2xl">Thêm sản phẩm</h1>
            <form id="form-add-pro" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Danh mục sản phẩm<span className="text-red-500">*</span></label><br />
                    <select className="bg-yellow-400 p-3 rounded shadow-inner w-full" {...register('category')} id="">
                        <option value="" className='text-xl'>--Chọn danh mục--</option>
                        {cate?.map((e, index) => {
                            return (
                                <option key={index} value={`${e._id}`}>{e.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên sản phẩm<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name')} className="border border-gray-300 p-2 w-full" id="name" />
                </div>
                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá tiền<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('price')} className="border border-gray-300 p-2 w-full" id="price" />
                    </div>
                    {/* ... */}
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Số lượng<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('quantity')} className="border border-gray-300 p-2 w-full" id="quantity" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Mô tả<span className="text-red-500">*</span></label><br />
                    <textarea {...register('desc')} className="w-full sec p-3 h-60 border border-gray-300 " id="desc" placeholder="Mô tả sản phẩm" defaultValue={""} />
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Upload Photo<span className="text-red-500">*</span></label><br />
                    <input type="file" {...register('img')} className="w-full sec p-3 h-30 border border-gray-300 " id="desc" placeholder="Upload ảnh" />
                </div>

                {/* <div className="mb-3 flex justify-center">
                    <img src="https://cafesongao.com/wp-content/uploads/2021/07/tao-dang-bau-troi-1-min-300x400.jpg" alt='' className="border-solid border-white border-2 -mt-3 w-1/12" />
                </div> */}
                {/* <div className="mb-3">
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Upload Photo</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-orange-300 group">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">Select a photo</p>
                                </div>
                                <input type="file" {...register('img')} className="hidden" />
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Cancel</button>
                    <button className="w-auto bg-orange-700 hover:bg-orange-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Create</button>
                </div>
            </form>
        </div>

    )
}

export default ProductEdit