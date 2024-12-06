"use client"
import React, { useState } from 'react';

const Count_FAQ = () => {
    const [activeTab, setActiveTab] = useState('stats');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAccordionToggle = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div>
           <div className='w-[90%] mx-auto text-gray-900 text-2xl font-semibold py-10'>
                <h1>Statistics : </h1>
            </div>
        <div className="w-[80%] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select
                    id="tabs"
                    className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={activeTab}
                    onChange={(e) => handleTabClick(e.target.value)}
                >
                    <option value="stats">Statistics</option>
                    <option value="about">Services</option>
                    <option value="faq">FAQ</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
                <li className="w-full">
                    <button
                        type="button"
                        onClick={() => handleTabClick('stats')}
                        className={`inline-block w-full p-4 rounded-ss-lg ${activeTab === 'stats' ? 'bg-gray-50' : ' hover:bg-gray-200'}`}
                    >
                        Statistics
                    </button>
                </li>
                <li className="w-full">
                    <button
                        type="button"
                        onClick={() => handleTabClick('about')}
                        className={`inline-block w-full p-4 ${activeTab === 'about' ? 'bg-gray-50' : ' hover:bg-gray-200'}`}
                    >
                        Services
                    </button>
                </li>
                <li className="w-full">
                    <button
                        type="button"
                        onClick={() => handleTabClick('faq')}
                        className={`inline-block w-full p-4 rounded-se-lg ${activeTab === 'faq' ? 'bg-gray-50' : ' hover:bg-gray-200'}`}
                    >
                        FAQ
                    </button>
                </li>
            </ul>

            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                {activeTab === 'stats' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">7300+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Products</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Delivary</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Customers</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">200+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Orders</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Panding</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100%</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Customer satisfaction</dd>
                            </div>
                        </dl>
                    </div>
                )}

                {activeTab === 'about' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Dynamic reports and dashboards</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Templates for everyone</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Fast and easy integration</span>
                            </li>
                        </ul>
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <div className="space-y-4">
                            <div className="accordion-item">
                                <h2 id="faq1" className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">How do I use this product?</h2>
                                <button onClick={() => handleAccordionToggle(0)} className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded-lg">Toggle Answer</button>
                                {activeAccordion === 0 && (
                                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                                        <p>This is a simple accordion answer for the FAQ.</p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion-item">
                                <h2 id="faq2" className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Can I use this product for my business?</h2>
                                <button onClick={() => handleAccordionToggle(1)} className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded-lg">Toggle Answer</button>
                                {activeAccordion === 1 && (
                                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                                        <p>Yes, this product is designed for business use as well.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Count_FAQ;
