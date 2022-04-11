import { useEffect, useState } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import { create, list, remove, update } from './api/product'
import ProductList from './components/ProductList'
import Dashboard from './pages/Dashboard'
import AdminLayout from './pages/layout/AdminLayout'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './components/ProductManager'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ProductType } from './type/Product'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import Search from './pages/Search';
import HomePage from './pages/HomePage';
import ProductLayout from './pages/layout/ProductLayout';
import PrivateRouter from './components/PrivateRouter';
import Error from './pages/Error';
import CategoryList from './components/CategoryList';
import axios from 'axios';

function App() {
    
    const [products, setProducts] = useState<ProductType[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            console.log(data);

            setProducts(data)
        }
        getProducts()
    }, [])

    const onHandleRemove = async (id: number) => {
        remove(id)
        setProducts(products.filter(item => item._id !== id))
    }

    const onHandleAdd = async (product: any) => {
        try {
            const apiUrl = "https://api.cloudinary.com/v1_1/dfwailscz/image/upload"
            const image = product.img[0]
            const formdata = new FormData()
            formdata.append("file",image)
            formdata.append("upload_preset","ass_react")
            const {data} = await axios.post(apiUrl, formdata,{
                headers: {
                    "Content-type": "application/form-data",
                }
            })
            const addproduct = await create({...product, img:data.url})
            toast.success("Bạn đã thêm sản phẩm thành công")
                //...product mảng ban đầu sét vơi product mới thêm
            setProducts([...product, addproduct.data])
            setTimeout(()=> navigate("/admin/product"), 3000)
        } catch (error) {
            toast.error("Thêm sản phẩm không thành công")
            console.log(error)
        }
    }

    const onHandleUpdate = async (product: ProductType) => {
        try {
            const { data } = await update(product);
            setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {

        }
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<WebsiteLayout />}>
                    <Route index element={<ProductList products={products} />} />
                    <Route path='product/search/:search_value' element={<Search/>}/>
                    {/* <Route path='/dung' element={<HomePage/>} products={products}/> */}
                </Route>
                <Route path='/product' element={<ProductLayout />}>
                    <Route index element={<HomePage products={products} />} />
                    <Route path='category/:id' element={<CategoryList />}/>
                </Route>

                

                <Route path='product/:id' element={<ProductDetail />} />

                <Route path='/admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                    <Route index element={<Dashboard />} />
                    <Route path='product' element={<ProductManager products={products} onRemove={onHandleRemove} />} />
                    <Route path='product/add' element={<ProductAdd onAdd={onHandleAdd} />} />
                    <Route path='product/:id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
                </Route>
                
                <Route path='/signup'element={<SignUp name={''} email={''} password={''}/>}/>
                <Route path='/signin'element={<SignIn email={''} password={''}/>}/>
                <Route path='/error'element={<Error/>}/>
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App
