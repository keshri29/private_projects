import React from 'react';
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
   const dispatch = useDispatch();

 const toggleMenuHandler =()=>{
   dispatch(toggleMenu());
 };

  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
      <div className='flex col-span-1 ' >
    <img
    onClick={()=>toggleMenuHandler()}

    className='h-8 cursor-pointer'
      alt='menu'
        src='https://icon-library.com/images/hamburger-menu-icon/hamburger-menu-icon-18.jpg' />

<a href='/'>
    <img
    className='h-8 mx-2'
      alt='youtube-logo'
        src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp' />
        </a>

    </div>
    <div className='col-span-10 px-10'>
        <input
          className='w-1/2 border-grey-400 p-2 rounded-l-full' type='text' />
        <button className='border border-grey-400  px-5 py-2 rounded-r-full bg-grey-100' >🔍</button>
    </div>
    <div col-span-1>
     <img alt='user'
        className='h-8'
        src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' />
    </div>
</div>

  )
}

export default Head