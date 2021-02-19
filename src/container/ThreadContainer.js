import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import ThreadList from '../components/ThreadList';


const ThreadContainer = () => {

    const [allThreads, setAllThreads] = useState([]);

    const getThreads = () => {
        console.log("fetching threads..")
        fetch("https://www.reddit.com/r/foodhacks.json")
        .then(res => res.json())
        .then(data => setAllThreads(data.data.children))
        
    };
    

    useEffect(() => {
        getThreads()
    }, []);

    return(
        <Router>
            <>
            <h1>This is the page.</h1>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/threads" render={() => <ThreadList allThreads={allThreads} />}/>

        

            </>
        </Router>
    ) 
};

export default ThreadContainer;