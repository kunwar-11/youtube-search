import React from 'react'

function Searchedvideo({isLoaded , video , title}) {
    return (
        <div>
            {isLoaded ? <iframe width="370" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title = {title}></iframe> : <div>Loading...</div>}
           
        </div>
    )
}

export default Searchedvideo
