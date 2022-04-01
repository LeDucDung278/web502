import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
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

function App() {

    const [products, setProducts] = useState<ProductType[]>([])
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
        console.log('app.s', product)

        const { data } = await create(product)

        setProducts([...products, data])
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
                </Route>

                <Route path='product/:id' element={<ProductDetail />} />

                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='product' element={<ProductManager products={products} onRemove={onHandleRemove} />} />
                    <Route path='product/add' element={<ProductAdd onAdd={onHandleAdd} />} />
                    <Route path='product/:id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
                </Route>
                
                <Route path='/signup'element={<SignUp/>}/>
                <Route path='/signin'element={<SignIn/>}/>
            </Routes>
        </div>
    )
}

export default App
