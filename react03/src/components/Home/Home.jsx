import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Illustration/Image */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="w-full max-w-lg">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                                alt="Remote work illustration"
                            />
                        </div>
                    </div>

                    {/* Right Side - Text and CTA */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                                Download Now
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-700">
                                Lorem Ipsum
                            </p>
                        </div>

                        <Link
                            className="inline-flex items-center gap-3 text-white bg-[#8B4513] hover:bg-[#7a3a10] font-medium rounded-lg px-8 py-4 text-lg transition-colors shadow-lg hover:shadow-xl"
                            to="/"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            Download now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}