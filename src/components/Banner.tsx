import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner2_n5cgpa.jpg" className="block w-100" alt="Wild Landscape" />
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner3_vity2h.jpg" className="block w-100" alt="Camera" />
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner1_in9hnz.jpg" className="block w-100" alt="Exotic Fruits" />
                </div>
            </div>
            <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Banner