

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList"
import FeedbackLength from "./components/FeedbackLength";
import FeedbackForm from "./components/FeedbackForm";

import { FeedbackProvider } from "./context/FeedbackContext";



const App = () => {

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