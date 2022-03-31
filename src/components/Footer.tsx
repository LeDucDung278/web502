import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="border-t border-gray-200 bg-blue-900">
            <div className="text-white container flex flex-col flex-wrap px-4 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left mt-4">
                    <h2 className="mb-2 font-bold text-2xl pl-7">
                        Thông tin liên hệ
                    </h2>
                    <ul className="mb-8 space-y-2 text-sm list-none">
                        <li className="flex cursor-pointer">
                            <svg className="h-6 w-6 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx={12} cy={10} r={3} /></svg>
                            <a className="text-white hover:text-orange-700 no-underline cursor-pointer">30 Phạm Văn Đông, Mai Dịch, Cầu Giấy, Hà Nội</a>
                        </li>
                        <li className="flex cursor-pointer">
                            <svg className="h-6 w-6 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />  <line x1={12} y1={18} x2="12.01" y2={18} /></svg>
                            <a className="text-white hover:text-orange-700 no-underline cursor-pointer">0327-025-224</a>
                        </li>
                        <li className="flex cursor-pointer">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 172 172" style={{ fill: '#000000' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}  strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M51.95833,28.66667c-6.86192,0 -12.54167,5.67975 -12.54167,12.54167v7.10368l-17.1958,10.2321c-4.88354,2.90329 -7.88753,8.17975 -7.88753,13.85742v54.8068c0,12.79944 10.49222,23.29167 23.29167,23.29167h96.75c12.79944,0 23.29167,-10.49222 23.29167,-23.29167v-54.79981c0,-5.68105 -3.00259,-10.95427 -7.88053,-13.85742c-0.00233,-0.00233 -0.00466,-0.00467 -0.007,-0.007l-17.1958,-10.2251v-7.11068c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167zM51.95833,39.41667h68.08333c1.05724,0 1.79167,0.73442 1.79167,1.79167v41.08936l-35.83333,17.43376l-35.83333,-17.43376v-30.0944c0.09479,-0.57703 0.09479,-1.16565 0,-1.74268v-9.25228c0,-1.05724 0.73442,-1.79167 1.79167,-1.79167zM39.41667,60.82568v16.24398l-13.87142,-6.74674c0.43893,-1.03685 1.16357,-1.94244 2.1696,-2.54053zM132.58333,60.83268l11.70182,6.95671c1.00041,0.59706 1.72211,1.50009 2.1626,2.53353l-13.86442,6.74674zM25.08333,82.05274l58.5651,28.4917c1.48454,0.72219 3.21859,0.72219 4.70313,0l58.5651,-28.4917v45.1556c0,6.98772 -5.55394,12.54167 -12.54167,12.54167h-96.75c-6.98772,0 -12.54167,-5.55394 -12.54167,-12.54167z" /></g></g></svg>
                            <a className="text-white hover:text-orange-700 no-underline cursor-pointer">vina@dongho.vn</a>
                        </li>
                    </ul>
                </div>
                <div className="justify-between w-full mt-4 lg:flex">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold text-2xl text-white pl-7">
                            Liên kết
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Giới thiệu</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Đồng hồ nam</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Đồng hồ nữ</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Blogs</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold text-2xl text-white pl-7">
                            Hỗ trợ
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Hướng dẫn mua hàng</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Hướng dẫn thanh toán</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Chính sách bảo hành</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Chính sách đổi trả</a>
                            </li>
                            <li className="cursor-pointer">
                                <a className="text-white hover:text-orange-700 no-underline">Tư vấn khách hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold text-white text-2xl pl-7">
                            Tải ứng dụng trên
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                Ứng dụng Vina Watch hiện có sẵn trên Google Play &amp; App Store. Tải nó ngay.
                            </li>
                            <li>
                                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg"  />
                            </li>
                            <li>
                                <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg"  />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


    )
}
export default Footer