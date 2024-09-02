import React from 'react'
import FeedbackItem from './FeedbackItem'

import FeedbackContext from '../context/FeedbackContext'
import DeleteConfirmationModal from './shared/DeleteConfirmationModal'
import { useContext } from 'react'


const FeedbackList = () => {



  const {feedback,showModal,handleCloseModal,handleConfirmDelete} = useContext(FeedbackContext);


  if(feedback.length === 0){
    return <p className='text-[24px] text-orange-600'>No Feedback yet</p>
  }  

   

  return (
    <div className='feedback-list'>
        {
            feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))
        }
        <DeleteConfirmationModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
    
  )
}

export default FeedbackList