import React, { useState } from "react";
import SidebarNavbar from "../../components/SidebarNavbar";
import axios from "axios";
import { toast } from "react-toastify";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [ratingStar, setRating] = useState<string>("");
  const ratingOptions = [1, 2, 3, 4, 5, 6];

  const handleFeedback = async () => {
    if (feedback === "" || ratingStar === "") {
      toast.warn("🦄 Please fill in all fields!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      await axios.post("http://localhost:8000/feedback", {
        feedback,
        ratingStar,
      });
      toast.success("🦄 Feedback submitted successfully!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFeedback("");
      setRating("");
    } catch (error) {
      console.error(error);
      toast.error(`Failed to send feedback: ${error}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="dashboard_container">
      <SidebarNavbar />
      <main>
        <div className="feedback">
          <select
            onChange={(e) => setRating(e.target.value)}
            value={ratingStar}
          >
            <option value="" disabled>
              Select a rating
            </option>
            {ratingOptions.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Please send feedback"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
          ></textarea>
          <button onClick={handleFeedback}>Submit</button>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
