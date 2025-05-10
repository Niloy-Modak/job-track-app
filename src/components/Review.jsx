import React from 'react';
import { IoIosStar } from "react-icons/io";

const Review = () => {
    return (
        <section className='w-[85%] mx-auto mb-16 md:mb-28'>
            <h1 className='text-3xl font-bold text-secondary pb-6'>
                Clients Review
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                <div className='space-y-4 rounded-xl bg-blue-50 p-6 shadow'>
                    <div className='flex gap-4'>
                        <img className='w-20 h-20 object-cover rounded-full shadow' src="https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740" alt="" />
                        <p>
                            <span className='text-xl font-medium'>
                                Robert Fox
                            </span>
                            <br />
                            <span className='text-xs text-gray-400'>UI/UX Designer</span>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-orange-400 flex'>
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                        </h1>
                        <p className='mt-2'>
                            I would rate this online job 5star. It's a good opportunity for those looking to earn extra income, gain experience, or work flexibly for long-term career growth.
                        </p>
                    </div>
                </div>

                <div className='space-y-4 rounded-xl bg-blue-50 p-6 shadow'>
                    <div className='flex gap-4'>
                        <img className='w-20 h-20 object-cover rounded-full shadow' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740" alt="" />
                        <p>
                            <span className='text-xl font-medium'>
                                Bessie Cooper
                            </span>
                            <br />
                            <span className='text-xs text-gray-400'>Creative Director</span>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-orange-400 flex'>
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                        </h1>
                        <p className='mt-2'>
                              I would rate this online job 5star. It's a good opportunity for those looking to earn extra income, gain experience, or work flexibly for long-term career growth.
                        </p>
                    </div>
                </div>

                <div className='space-y-4 rounded-xl bg-blue-50 p-6 shadow'>
                    <div className='flex gap-4'>
                        <img className='w-20 h-20 object-cover rounded-full shadow' src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                        <p>
                            <span className='text-xl font-medium'>
                                Jane Cooper
                            </span>
                            <br />
                            <span className='text-xs text-gray-400'>Web developer</span>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-orange-400 flex'>
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                            <IoIosStar size={22} />
                        </h1>
                        <p className='mt-2'>
                              I would rate this online job 5star. It's a good opportunity for those looking to earn extra income, gain experience, or work flexibly for long-term career growth.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Review;