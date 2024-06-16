import { useEffect, useState } from "react";
import SidebarNavbar from "../components/SidebarNavbar";
import axios from "axios";

const Dashboard = () => {
  const [alldata, setAllData] = useState([]);

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

  const [allImployee, setAllImployee] = useState([]);

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
            <h3>Imployees</h3>
            <p>{allImployee.length}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
