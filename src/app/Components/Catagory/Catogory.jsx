"use client";
import React, { useEffect, useState } from 'react';

const Catagory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/product.json");
            const data = await res.json();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div className='w-[90%] mx-auto py-20'>
            <div className='text-gray-900 text-xl font-semibold py-10'>
                <h1>Find Your Product By Category: <span>(1000+ products)</span></h1>
            </div>

            <div className="grid grid-cols-6 justify-center items-center bg-gray-100 w-[90%] mx-auto gap-3">
                {products.slice(0, 6).map((product) => (
                    <div
                        key={product.id}
                        className="w-full text-center h-44 max-w-sm p-2 bg-white border border-gray-300  shadow dark:bg-gray-800 dark:border-gray-700 transition-all transform hover:border-yellow-500 rounded-full hover:scale-105"
                    >
                        {/* Card Content */}
                        <div className="flex flex-col justify-center items-center h-full space-y-4">

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full  flex justify-center items-center">
                                <span dangerouslySetInnerHTML={{ __html: product.icon }} className="w-16 h-16" />
                            </div>

                            {/* Product Category */}
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {product.category}
                                    </h5>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catagory;
