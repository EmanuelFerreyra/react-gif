import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    
    console.log(id,title, url);
    
    return (
          <div className="card mr-2 animate__fadeIn">
            <img src={ url } alt={ title }/>
            <div className="card-body">
              <h5 className="card-title">{ title }</h5>
            </div>
          </div>
    )
}
