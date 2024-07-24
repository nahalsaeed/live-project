"use client"
import { useState } from 'react';
import Map from '../destinantions/Map';

const Pricing = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    return (
        <div className="w-full mx-auto p-4  font-serif my-16">
            <div className=''>
                <h2 className="text-2xl font-semibold  mb-4 ">Pricing and Conditions</h2>
                <div className="flex justify-between bg-gray-100 p-4 rounded-md mb-2">
                    <span>Adult</span>
                    <span>$229.00</span>
                </div>
                <div>
                    <div
                        className="border-b border-gray-200 py-2  cursor-pointer"
                        onClick={() => toggle(1)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Age restriction</span>
                            <span>{open === 1 ? '-' : '+'}</span>
                        </div>
                        {open === 1 && (
                            <div className="mt-2 text-gray-600">
                            </div>
                        )}
                    </div>
                    <div
                        className="border-b border-gray-200 py-2 cursor-pointer"
                        onClick={() => toggle(2)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Terms and conditions</span>
                            <span>{open === 2 ? '-' : '+'}</span>
                        </div>
                        {open === 2 && (
                            <div className="mt-2 text-gray-600">
                                {/* Content for Terms and conditions */}
                            </div>
                        )}
                    </div>
                    <div
                        className="border-b border-gray-200 py-2 cursor-pointer"
                        onClick={() => toggle(3)}
                    >
                        <div className="flex justify-between items-center">
                            <span>Cancellation Policy</span>
                            <span>{open === 3 ? '-' : '+'}</span>
                        </div>
                        {open === 3 && (
                            <div className="mt-2 text-gray-600">
                                {/* Content for Cancellation Policy */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <h1 className="text-2xl font-semibold">About</h1>
                <p className='my-8'>Depart Halfmoon Bay, Stewart Island for a cruise to Little Glory Cove. Learn about Stewart Island's
                    rich history and disembark for a guided walk across the peninsula. As dusk sets in, and with your
                    guide, venture by torchlight through the native forest until the track emerges on to Ocean Beach.
                    This wide sandy beach is where the Southern brown kiwi (Rakiura Tokoeka) are found - often
                    searching for food.</p>
                <button className="bg-[#41913C] p-3  rounded-md text-white text-sm font-bold flex felx-row gap-1">
                    Visit Website
                </button>

            </div>
            <div className='my-20'>
                <h1 className="text-2xl font-semibold">Opening Times</h1>
                <p className='my-8'>Months of operation: <br />
                    Jan, Feb, Mar, Apr, May, Oct, Nov, Dec
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl font-semibold'> Location</h1>
                <Map className='h-auto' />
            </div>
        </div>
    );
};

export default Pricing;
