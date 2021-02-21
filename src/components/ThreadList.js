import React from 'react';
import {Link} from 'react-router-dom';


const ThreadList = ({allThreads, onSelectedThread}) => {

    const threadListItems = allThreads.map((thread, index) => {
        return(
            <>
            <Link to="/single-thread">
            <li onClick={() => {onSelectedThread(thread)}} key={index}>{thread.data.title}</li>
            </Link>
            </>
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