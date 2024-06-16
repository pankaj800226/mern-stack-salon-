import { useEffect, useState } from "react";
import SidebarNavbar from "../../components/SidebarNavbar";
import axios from "axios";
import Loading from "../../components/Loading";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// Define the interface for the Salon data type
interface Salon {
  _id: string;
  id: string;
  name: string;
  email: string;
  number: number;
  message: string;
  selectOption: string;
  createdAt: string;
  status: string;
}

const Manage = () => {
  const [alldata, setAllData] = useState<Salon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/showData");
        setAllData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);

  // Filter data based on search input
  const searchFilter = alldata.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to get the status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "cancel":
        return "red";
      case "booked":
        return "green";
      default:
        return "black";
    }
  };

  // Handle delete operation
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${id}`);
      toast("🦄  deleted", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setAllData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
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
    <div className="dashboard_container">
      <SidebarNavbar />
      <main>
        <div className="manage">
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search item"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {loading ? (
            <Loading />
          ) : searchFilter.length === 0 ? (
            <h1>Not Found</h1>
          ) : (
            searchFilter.map((item) => (
              <div key={item._id} className="manage_data">
                <div className="manage_left">
                  <h1>Name: {item.name}</h1>
                  <p>ID: {item._id}</p>
                  <div className="delete">
                    <p>Time: {new Date(item.createdAt).toLocaleString()}</p>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <AiFillDelete />
                    </IconButton>
                    <Link to={`/edit/${item._id}`}>
                      <IconButton aria-label="edit">
                        <AiFillEdit />
                      </IconButton>
                    </Link>
                  </div>
                </div>
                <div className="manage_right">
                  <p>Number: {item.number}</p>
                  <p>Style: {item.selectOption}</p>
                  <div>
                    <strong style={{ color: getStatusColor(item.status) }}>
                      Status: {item.status}
                    </strong>
                  </div>
                  <h3>Comment: {item.message}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Manage;
