

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList"
import FeedbackLength from "./components/FeedbackLength";
import FeedbackForm from "./components/FeedbackForm";

import { FeedbackProvider } from "./context/FeedbackContext";
import Loading from './components/Loading';
import { useState, useEffect } from "react";


const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (

    <>
    <FeedbackProvider>
    
     <Header/>

     
     <div className="container">

       <FeedbackForm/>

       <FeedbackLength/>
       
       <FeedbackList/>

     </div>
    </FeedbackProvider>
    </>

  )
}

export default App