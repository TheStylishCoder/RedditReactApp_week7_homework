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
            <li className="list-item" onClick={() => {onSelectedThread(thread)}} key={index}>{thread.data.title} <br />{thread.data.link_flair_text}</li>
            </Link>
        )
        
            
    })

    return(
        <div className="container">
            <ul className="thread-list">
                {listNodes}
            </ul>
        </div>
    )
}

export default FavouriteThreadsList;

