import React from 'react';


const ThreadList = ({allThreads, onSelectedThread}) => {

    const threadListItems = allThreads.map((thread, index) => {
        return(
            <li onClick={() => {onSelectedThread(thread)}} key={index}>{thread.data.title}</li>
        ) 
    });


    return(
        <>
        <ul>
            {threadListItems}
        </ul>
        </>
    )
};

export default ThreadList;