import React from 'react';
import {Link} from 'react-router-dom';


const ThreadList = ({allThreads, onSelectedThread}) => {

    const threadListItems = allThreads.map((thread, index) => {
        return(
            <>
            <Link to="/single-thread">
            <li className="list-item" onClick={() => {onSelectedThread(thread)}} key={index}>{thread.data.title}</li>
            </Link>
            </>
        ) 
    });

    const options = allThreads.map((thread, index) => {
        return(
            <option value={thread.data.title} key={index}>{thread.data.link_flair_text}</option>
        )
    })

    const handleChange = (event) => {
        const foundType = allThreads.find((thread) => {
            return thread.data.title === event.target.value
        })
        onSelectedThread(foundType)
        
    }

    


    return(
        <>
        
        <select onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose type of Hack...</option>
            {options}
        </select>
        
        <br />
        <div className="container">
            <ul className="thread-list">
                {threadListItems}
            </ul>
        </div>
        </>
    )
};

export default ThreadList;