import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/frontend-assets/assets';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    
  return (
    <>
    <Navbar />
    <div className='mt-10 flex gap-8 flex-row md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
            &nbsp;<b>Spotify</b>
            &nbsp; &bull;  23,898,909 likes
            &nbsp; &bull;  <b>50 songs</b>
            &nbsp; &bull;  about 2 hr 30 min

            </p>
        </div>
    </div>
    <div className='grid grid-cols-4 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
    <p><b className='mr-4'>#</b>Title</p>
    <p>Album</p>
    <p className='sm:block'>Date Added</p>
    <img className='m-auto w-4' src={assets.clock_icon} alt="" />

    </div>

      
    </>
  )
}

export default DisplayAlbum


// w-4   width:4
{/* <p className='hidden sm:block'>Date Added</p> */}



