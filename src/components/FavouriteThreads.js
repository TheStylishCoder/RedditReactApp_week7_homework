import React from 'react';
import {Link} from 'react-router-dom';

const FavouriteThreadsList = ({allThreads, onSelectedThread}) => {

   
    if(!allThreads){
        return(null)
    }

    const filteredThreads = allThreads.filter((thread) => {
        return thread.favourite
    })

    const listNodes = filteredThreads.map((thread, index) => {
        return(
            <Link to="/single-thread">
            <li onClick={() => {onSelectedThread(thread)}} key={index}>{thread.data.title}</li>
            </Link>
        )
        
            
    })

    return(
        <>
        <ul>
            {listNodes}
        </ul>
        </>
    )
}

export default FavouriteThreadsList;

