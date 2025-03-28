import React from 'react'
import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi";
import EditChapters from './EditChapters';
export default function ChapterList({ course,refreshData }) {
    return (
        <div className="mt-3">
            <h2 className="font-medium text-xl">Chapters</h2>
            <div className="mt-2">
                {course?.courseOutput?.Chapters.map((chapter, index) => (
                    <div className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                        <div className="flex gap-5 items-center">
                            <h2 className='bg-primary flex-none h-10 w-10 rounded-full text-center text-white p-2'>{index + 1}</h2>
                            <div>
                                <h2 className="font-medium text-lg">{chapter.ChapterName} <EditChapters course={course} index={index} refreshData={()=>refreshData(true)}/> </h2>
                                <p className="text-sm text-gray-500 ">{chapter.About}</p>
                                <p className='flex gap-2 text-primary items-center'><HiOutlineClock /> {chapter.Duration}</p>
                            </div>
                        </div>
                        <HiOutlineCheckCircle className='text-gray-300 text-4xl flex-none' />
                    </div>
                ))}
            </div>
        </div>
    )
}
