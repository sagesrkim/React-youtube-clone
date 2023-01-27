import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { HiMoon, HiSun } from 'react-icons/hi'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDarkMode } from '../context/DarkmodeContext';


export default function SearchHeader() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
        setText('');
    }
    useEffect(() => setText(keyword || ''), [keyword]);
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-800 mb-4'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-3xl text-brand' />
                <h1 className='font-bold ml-2 text-2xl '>YouTube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input className='w-6/12 p-2 pl-5 border-solid border text-zinc-800 text-lg rounded-l-full' onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder='Search' />
                <button className='bg-zinc-300 border-solid border px-4 rounded-r-full hover:opacity-75 cursor-pointer'>
                    <BsSearch />
                </button>
            </form>
            <button className='w-20 h-12 flex justify-center items-center text-3xl rounded-full border border-solid cursor-pointer transition ease-in  hover:bg-zinc-300' onClick={toggleDarkMode} >
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
        </button>
        </header>
    );
}

