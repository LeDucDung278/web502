import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <nav className="flex justify-center items-center bg-neutral-900 ">
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 " id="mobile-menu-2">
                <ul className="flex flex-col my-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a href="/#" className="uppercase block p-3 text-orange-700 hover:bg-white hover:text-orange-700 no-underline" aria-current="page">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/gioi-thieu" className="uppercase block p-3 text-white dark:border-gray-700 hover:bg-white hover:text-orange-700 no-underline">GIỚI THIỆU</a>
                    </li>
                    <li>
                        <a href="" className="uppercase block p-3 text-white dark:border-gray-700 hover:bg-white hover:text-orange-700 no-underline">đồng hồ nam</a>
                    </li>
                    <li>
                        <a href="" className="uppercase block p-3 text-white dark:border-gray-700 hover:bg-white hover:text-orange-700 no-underline">đồng hồ nữ</a>
                    </li>
                    <li>
                        <a href="/blogs" className="uppercase block p-3 text-white dark:border-gray-700 hover:bg-white hover:text-orange-700 no-underline">Blog</a>
                    </li>
                    <li>
                        <a href="/lien-he" className="uppercase block p-3 text-white dark:border-gray-700 hover:bg-white hover:text-orange-700 no-underline">liên hệ</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nav