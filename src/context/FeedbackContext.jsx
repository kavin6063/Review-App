
import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

    const editFeedback = (item) => {
      setFeedbackEdit({
        item:item,
        edit:true
      })
    }
    const [itemToDelete, setItemToDelete] = useState(null); 

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      fetchFeedback();
    }, []);

    // CRUD

    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:4000/posts");
        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };




   const addFeedback = async (newFeedback) => {
      const response = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });
  
      const data = await response.json();
  
      setFeedback([data, ...feedback]);
    };



  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:4000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };




  const deleteFeedback = async (id) => {
    await fetch(`http://localhost:4000/posts/${id}`, { method: "DELETE" });
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // handling confirm modal

  const handleDeleteClick = (item) => {
    setItemToDelete(item); // Set the item to be deleted
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setItemToDelete(null); // Clear the item to be deleted
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete) {
      await deleteFeedback(itemToDelete.id); // Delete the feedback with the stored ID
      setItemToDelete(null); // Clear the item after deletion
    }
    setShowModal(false); // Close the modal
    console.log("Feedback deleted");
  };

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
        showModal,
        handleDeleteClick,
        handleCloseModal,handleConfirmDelete

    }}>
        { children }
    </FeedbackContext.Provider>


}


export default FeedbackContext;
