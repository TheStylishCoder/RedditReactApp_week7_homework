import React from 'react';

const FavouriteThreadsList = ({allThreads}) => {

   
    if(!allThreads){
        return(null)
    }

    const filteredThreads = allThreads.filter((thread) => {
        return thread.favourite
    })

    const listNodes = filteredThreads.map((thread, index) => {
        return(
            <li key={index}>{thread.data.title}</li>
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

