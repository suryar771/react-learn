import React from 'react'

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="w-full">
                            <img
                                className="w-full h-auto rounded-lg shadow-xl object-cover"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Team collaboration"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                                React development is carried out by passionate developers
                            </h1>
                        </div>
                        
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            </p>
                            <p>
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                            </p>
                        </div>

                        {/* Additional Features Section */}
                        <div className="pt-6 grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-black">Fast Development</h3>
                                <p className="text-gray-600">Build modern applications with cutting-edge technology</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-black">Expert Team</h3>
                                <p className="text-gray-600">Work with experienced developers and designers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}