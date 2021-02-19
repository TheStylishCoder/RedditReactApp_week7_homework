import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import ThreadList from '../components/ThreadList';
import ThreadDetail from '../components/ThreadDetail';


const ThreadContainer = () => {

    const [allThreads, setAllThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const getThreads = () => {
        console.log("fetching threads..")
        fetch("https://www.reddit.com/r/foodhacks.json")
        .then(res => res.json())
        .then(data => setAllThreads(data.data.children))
        
    };
    

    useEffect(() => {
        getThreads()
    }, []);

    const handleSelectedThread = (thread) => {
        setSelectedThread(thread)
        setRedirect(true)
    };

    const setRedirectToFalse = () => {
        setRedirect(false)
    }

    return(
        <Router>
            <>
            <h1>Food Hacks</h1>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/threads" render={() => <ThreadList allThreads={allThreads} onSelectedThread={handleSelectedThread}/>}/>
            {redirect && <Redirect to="/single-thread" />}
            <Route exact path="/single-thread" render={() => <ThreadDetail thread={selectedThread} setRedirectToFalse={setRedirectToFalse}/>} />
        

            </>
        </Router>
    ) 
};

export default ThreadContainer;