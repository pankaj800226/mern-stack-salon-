import { useEffect, useState } from "react";
import SidebarNavbar from "../components/SidebarNavbar";
import axios from "axios";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
interface Supp {
  email: string;
  _id: string;
}

const Support = () => {
  const [support, setSupport] = useState<Supp[]>([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/supportData");
        setSupport(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApiData();
  }, [support]);

  //   delete functionality
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/supportDelete/${id}`);
      setSupport((prevData) => prevData.filter((data) => data._id === id));
      toast("🦄  delete", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast("🦄  delete faild", {
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
    <div>
      <div className="dashboard_container">
        <SidebarNavbar />
        <main>
          <div className="feedback_container">
            {support.length === 0 ? (
              <h1>Fedback Not Yet</h1>
            ) : (
              support.map((feedbackItem) => (
                <div className="feedback_item">
                  <p>{feedbackItem.email}</p>
                  <FaDeleteLeft
                    onClick={() => handleDelete(feedbackItem._id)}
                  />
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Support;
