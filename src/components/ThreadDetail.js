import React from 'react';

const ThreadDetail = ({thread, handleFaveThreads}) => {


    if(!thread){
        return (null)
    }
    

    const checkImage = () => {
        if(thread.data.thumbnail_height === null){
            return(null)
        }else{
            return(
                <img src={thread.data.thumbnail} height="150" />)
        }
    }

    
    return(
        <div className="detail-container">
            <h2><a href={thread.data.url}>{thread.data.title}</a></h2>
            <button onClick={() => {handleFaveThreads(thread)}}>
            {thread.favourite ? 'Delete from Favourites' : 'Add to favourites'}
            </button>
            <p>Author: {thread.data.author}</p>
            <p>Type of Hack: {thread.data.link_flair_text}</p>
            <p>Score on Reddit: {thread.data.score}</p>
            <p>UpVote Ratio: {thread.data.upvote_ratio}%</p>
            <p>Number of Awards Received: {thread.data.total_awards_received}</p>
            <p>{thread.data.selftext}</p>
            {checkImage()}
        </div>
        
    )
};

export default ThreadDetail;