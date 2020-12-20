import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {


    //const categories = ['personaje1','personaje2','personaje3']; 
    const [categories,setCategories] = useState(['']);

/*

    const handleAdd = () => {
        //setCategories( [...categories, 'hunterXhunter'] );
        setCategories( cats => [ ...cats, 'HunterXHunter' ] );
   
    }
*/
    return (
    <>
        <div className="container"> 
        <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories } />
        <hr/>
        <ol>
            { 
                categories.map( category => 
                    <GifGrid 
                        key= { category }
                        category= { category } />
                    ) 
            }
        </ol>
       
        
        </div>
    </>
    )
}