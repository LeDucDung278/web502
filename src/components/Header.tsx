import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="bg-gray-300">
            <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto py-2">
                <div className="header_top_left col-start-1 col-end-3">
                    <ul className="my-0">
                        <li className="inline-block mr-9 relative">
                            <i className="fa fa-envelope mr-2" />dungcon27@gmail.com
                            <div className="absolute h-6 w-px -right-5 top-0 bg-slate-200" />
                        </li>
                        <li className="inline-block"><i className="fas fa-phone-alt mr-2 bg" />0327.025.224</li>
                    </ul>
                </div>
                <div className="col-end-6 col-span-2 flex">
                    <div className="mr-8 relative">
                        <div className="absolute h-6 w-px -right-3 top-0 bg-slate-200" />
                        <a href="#" className="inline-block mr-2 text-black"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="inline-block mr-2 text-black"><i className="fab fa-twitter" /></a>
                        <a href="#" className="inline-block mr-2 text-black"><i className="fab fa-linkedin-in" /></a>
                        <a href="#" className="inline-block mr-2 text-black"><i className="fab fa-pinterest-p" /></a>
                    </div>
                    <div className="mr-8 relative">
                        <div className="absolute h-6 w-px -right-3 top-0 bg-slate-200" />
                        <div className="inline-block ml-1">
                            <div id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <i className="fa-brands fa-vimeo-v mr-2 text-red-700" />
                                Vietnamese
                                <svg className="ml-1 w-4 h-4 md:hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            {/* Dropdown menu */}
                            <div id="dropdownNavbar" className="hidden z-2 w-40 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownBottomButton">
                                    <li>
                                        <p className="block p-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <i className="fa-brands fa-edge-legacy mr-2 text-red-700" />
                                            English</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mr-7">
                        <a href="/signin" className="hover:text-black text-black no-underline">
                            <i className="fa fa-user mr-2 hover:text-orange-700" />
                            Đăng Nhập
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white grid grid-cols-4 gap-2">
                <div className="header__logo flex justify-center">
                    <a href="/"><img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645396195/dung/logo_dv5hv5.png" alt="" /></a>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <div className="w-9/12">
                        <form>
                            <div className="input-group relative flex items-stretch w-full">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid transition ease-in-out m-0 focus:border-none focus:text-gray-700 focus:bg-white focus:border-none shadow-sm" placeholder="Tìm kiếm" aria-label="Search" aria-describedby="button-addon2" />
                                <button className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="text-right inline-block">
                        <ul className="inline-block mr-3">
                            <li className="inline-block mr-2">
                                <a href="#" className="text-black hover:text-orange-700 relative">
                                    <i className="fa fa-heart text-xl" />
                                    <span className="absolute -top-4 -right-3 h-4 w-4 bg-gray-300 text-center text-xs rounded-full">1</span>
                                </a>
                            </li>
                            <li className="inline-block">
                                <a href="/cart" className="text-black hover:text-orange-700 relative">
                                    <i className="fa fa-shopping-bag text-xl" />
                                    <span className="absolute -top-4 -right-3 h-4 w-4 bg-gray-300 text-center text-xs rounded-full">3</span>
                                </a>
                            </li>
                        </ul>
                        <div className="inline-block ml-3">Total: <span className="font-semibold">150.000.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header