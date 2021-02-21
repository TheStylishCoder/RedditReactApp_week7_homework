import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import ThreadList from '../components/ThreadList';
import ThreadDetail from '../components/ThreadDetail';
import FavouriteThreadsList from '../components/FavouriteThreads';
import ErrorPage from '../components/ErrorPage';


const ThreadContainer = () => {

    const [allThreads, setAllThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);
    const [favourites, setFavourites] = useState([]);
  

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
        
    
    };
//can add different items but more than once
    // const handleFavouriteThreads = (selectedThread) => {
    //     setFavourites([...favourites, selectedThread]);
    // };

    //Can add different items but more than once
    // const handleFavouriteToggle = (selectedThread) => {
    //     if(favourites.some(favourite => favourite.title === selectedThread.title)){
    //         console.log("found")
    //     }else{
    //         setFavourites([...favourites, selectedThread])
    //     }
    //     setFavourites([...favourites, selectedThread])
             
       
        
    // };
   

    const handleFavouriteToggle = (selectedThread) => {
        const updatedThreads = allThreads.map((thread) => {
            if(thread.title === selectedThread.title){
                selectedThread.favourite = !selectedThread.favourite
            }
            return thread
        })
        setAllThreads(updatedThreads)
    }

   

    return(
        <Router>
            <>
            <h1>Food Hacks</h1>
            <NavBar />
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/threads" render={() => <ThreadList allThreads={allThreads} onSelectedThread={handleSelectedThread}/>}/>
            <Route exact path="/single-thread" render={() => <ThreadDetail thread={selectedThread}  handleFaveThreads={handleFavouriteToggle}/>} />
            <Route exact path="/favourites" render={() => <FavouriteThreadsList allThreads={allThreads} thread={selectedThread}/>}/>
            <Route component={ErrorPage} />
            </Switch>
            

            </>
        </Router>
    ) 
};

export default ThreadContainer;