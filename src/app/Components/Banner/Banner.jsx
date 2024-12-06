import React from "react";
import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative z-0 -mt-6 h-[40vh] md:h-[90vh] sm:h-[50vh] p-0 m-0">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/assets/banner/banner.jpg"
                    alt="Banner background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center h-full px-4 md:px-8">
                <div className="text-white w-full lg:w-[65%] space-y-6 pl-8 lg:pl-16 text-left">
                    <h4 className="text-xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInUp">
                        The leading B2B ecommerce platform for global trade
                    </h4>
                    <div className="relative flex lg:w-[93%]  items-center">
                        <input
                            type="text"
                            placeholder="Search any product"
                            className="w-full h-14 pl-4 pr-20 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-2  top-2 bottom-2 bg-yellow-500 text-white px-4 rounded-full hover:bg-yellow-600">
                            Search
                        </button>
                    </div>


                    {/* <p className="text-base sm:text-[8px] animate__animated animate__fadeInUp animate__delay-1s">
                        Travel is a transformative and enriching experience that allows
                        individuals to explore new destinations, cultures, and landscapes.
                    </p> */}
                </div>
            </div>
        </section>
    );
}
