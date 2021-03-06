import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Sidebar from '../../components/Sidebar'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div className=''>
            <Header />
            <Banner/>
            <main>
                    <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout