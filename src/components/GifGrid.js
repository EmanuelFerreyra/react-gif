import React from 'react';
//import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

//componente
export const GifGrid = ({ category }) => {



    const { data: images, loading } = useFetchGifs(category);
  /*
    const [images, setImages] = useState([]);


  */


    //getGifs();

    return (
        <div>
            <h3>{ category }</h3>
            <hr></hr>
            <br></br>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                { 
                    loading && <p>loading...</p>
                }

                { 
                    images.map( img => (
                          
                            <GifGridItem  
                                key={ img.id}
                                { ...img } />
                            ) )
                
                }
            </div>
        </div>
    )
}
