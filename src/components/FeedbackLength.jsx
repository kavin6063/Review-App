import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackLength = () => {

  const {feedback} = useContext(FeedbackContext);

  return (
    <div className="container font-bold  mx-auto">
        <h5 className="mb-5 text-[#0c4a6e]">Length : ({feedback.length})</h5>
    </div>
  )
}

export default FeedbackLength