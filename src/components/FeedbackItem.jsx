import { useContext } from "react";
import Card from "./shared/Card"
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ( {item} ) => {


  const { handleDeleteClick ,editFeedback ,setShowModal} = useContext(FeedbackContext);


  return (
    <Card>
       <div className='flex flex-row justify-between'>
          <div className="text-lg font-semibold text-[#27272a] dark:text-[#fafaf9]">
            {item.text}
          </div>
            <div className="flex flex-row gap-7">
                <button className="edit p-2 flex items-center justify-end bg-white dark:bg-slate-900 shadow-custom-light rounded-xl" onClick={() => editFeedback(item)}>
                    <MdModeEditOutline className="text-[#bb3e0d] hover:text-[#fa5818]"  size={"23px"}/>
                </button>
                <button className="delete p-2 flex items-center justify-end bg-white dark:bg-slate-900 shadow-custom-light rounded-xl" onClick={() => {
                  handleDeleteClick(item); 
                }}>
                    <FaRegTrashAlt className="text-[#a81b1b] hover:text-[#ec1c1c] " size={"22px"}/>
                </button>

            </div>
       </div>    
    </Card>
  )
}

export default FeedbackItem