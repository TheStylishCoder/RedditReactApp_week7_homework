import React from 'react';

const ThreadDetail = ({thread, setRedirectToFalse}) => {

    setRedirectToFalse()

    if(!thread){
        return (null)
    }
    return(
        <>
        <h2>{thread.data.title}</h2>
        <p>Author:{thread.data.author}</p>
        </>
    )
};

export default ThreadDetail;