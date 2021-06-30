import { useFetchGifs } from 'hooks/useFetchGifs'
import React from 'react'
import { GifGridImage } from './GifGridImage';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
    return (
        <>
        <h3 className='card animate__animated animate__fadeInLeft'> {category} </h3>

        { loading && <p> Loading... </p> }
        
        <div className="card-grid">           
           {           
               images.map( img => (    
                 <GifGridImage 
                    key={ img.id }
                    {...img}
                 /> 
               ))
            }           
        </div>
        </>
    )
}
