import { useEffect, useState } from "react";
import SidebarNavbar from "../components/SidebarNavbar";
import axios from "axios";

const Dashboard = () => {
  const [alldata, setAllData] = useState([]);
  const [allImployee, setAllImployee] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [support, setSupport] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/showData");
        setAllData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, []);

  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/impDataShow");
        setAllImployee(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApiData();
  }, []);

  //feedback
  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/feedbackData");
        setFeedback(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApiData();
  }, []);

  //support
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
  }, []);
  return (
    <div className="dashboard_container">
      <SidebarNavbar />
      <main>
        <div className="dashboard">
          <div>
            <h3>Booking</h3>
            <p>{alldata.length}</p>
          </div>

          <div style={{ backgroundColor: "pink" }}>
            <h3>Employees</h3>
            <p>{allImployee.length}</p>
          </div>

          <div style={{ backgroundColor: "gray" }}>
            <h3>Support</h3>
            <p>{support.length}</p>
          </div>

          <div style={{ backgroundColor: "green" }}>
            <h3>Rating</h3>
            <p>{feedback.length}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
