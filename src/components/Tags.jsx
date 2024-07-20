"use client";
import React, { useState } from 'react';
import "@/app/globals.css";

export default function Tags({ tags }) {
    const [activeTag, setActiveTag] = useState(0); 

    const handleTagClick = (index) => {
        setActiveTag(index);
    };

    return (
        <div className='space-x-3'>
            
                    {tags.map((tag, index) => (
                    <span
                        key={index}
                        onClick={() => handleTagClick(index)}
                        className={`rounded-full px-3 py-1 text-xs cursor-pointer ${index === activeTag ? 'bg-black text-white' : 'bg-[#D8D8D8] text-black'}`}
                    >
                        {tag}
                    </span>
                ))}
        </div>
    );
}
