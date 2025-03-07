import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineClock, HiOutlinePlayCircle } from 'react-icons/hi2';

export default function CourseDetail({ course }) {
    return (
        <div className="border p-6 rounded-lg shadow-sm mt-3 gap-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="flex gap-2">
                    <HiOutlineChartBar className='text-xl text-primary' />
                    <div className=''>
                        <h2 className="text-lg text-gray-500">Skill Level:</h2>
                        <h2 className='font-semibold text-lg'>{course?.level}</h2>
                    </div>
                </div>
                <div className="flex gap-2">
                    <HiOutlineClock className='text-xl text-primary' />
                    <div className=''>
                        <h2 className="text-lg text-gray-500">Duration:</h2>
                        <h2 className='font-semibold text-lg'>{course?.courseOutput?.Duration}</h2>
                    </div>
                </div>
                <div className="flex gap-2">
                    <HiOutlineBookOpen className='text-xl text-primary' />
                    <div className=''>
                        <h2 className="text-lg text-gray-500">Chapter Count:</h2>
                        <h2 className='font-semibold text-lg'>{course?.courseOutput?.NoOfChapters}</h2>
                    </div>
                </div>
                <div className="flex gap-2">
                    <HiOutlinePlayCircle className='text-xl text-primary' />
                    <div className=''>
                        <h2 className="text-lg text-gray-500">Video Included:</h2>
                        <h2 className='font-semibold text-lg'>{course?.includeVideo}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
