import { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";
import Alert from "../components/shared/Alert"; 
const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false);
      setText(feedbackEdit.item.text);
    } else {
      setText("");
      setBtnDisable(true);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;

    if (inputText === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (inputText.trim().length <= 10) {
      setBtnDisable(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisable(false);
    }

    setText(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = { text };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setBtnDisable(true);
      setMessage(null);
      setShowAlert(true);

      setTimeout(() => setShowAlert(false), 2000);
    }
  };

  return (
    <>
    <div className="container mx-auto flex flex-row items-center justify-center">
        {showAlert && <Alert message={" Your Feedback "} actionMessage={"Added succesfully!"} version={'#0f766e'} />}
    </div>
    <div className="flex flex-row items-center justify-center mt-8">
      <Card>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-[#0c4a6e] text-xl">Add your reviews</h3>
          <div className="flex flex-row gap-3 mt-8">
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#3d3d3d] focus:outline-[#5094DE] border-[#5094DE]"
              placeholder="Write your review"
            />
            <Button isDisabled={btnDisable} version="primary" type="submit">
              Send
            </Button>
          </div>
          {message && <p className="text-[#d97706] mt-3">{message}</p>}
        </form>
      </Card>
    </div>
    </>
  );
};

export default FeedbackForm;
