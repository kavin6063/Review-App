import { useContext } from "react";
import Card from "./shared/Card"
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ( {item} ) => {


  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);


  return (
    <Card>
       <div className='flex flex-row justify-between'>
          <div className="text-lg font-semibold text-[#27272a] dark:text-[#fafaf9]">
            {item.text}
          </div>
            <div className="flex flex-row gap-7">
                <button className="edit" onClick={() => editFeedback(item)}>
                    <MdModeEditOutline color="orange" size={"23px"}/>
                </button>
                <button className="delete" onClick={() => deleteFeedback(item.id)}>
                    <FaRegTrashAlt color="red" size={"22px"}/>
                </button>

            </div>
       </div>    
    </Card>
  )
}

export default FeedbackItem