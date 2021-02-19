import React from 'react';


const ThreadList = ({allThreads}) => {

    const threadListItems = allThreads.map((thread, index) => {
        return(
            <li key={index}>{thread.data.title}</li>
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