import { useEffect, useState } from "react";
import SidebarNavbar from "../../components/SidebarNavbar";
import axios from "axios";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";

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
  photo: string;
  address: string;
}

const ImployDataShow = () => {
  const [alldata, setAllData] = useState<Salon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/impDataShow");
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
      case "conform":
        return "green";
      default:
        return "black";
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/imployDelete/${id}`);
      setAllData((prevData) => prevData.filter((data) => data._id !== id));
      toast("🦄 imployee delete", {
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
      console.log(error);
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
                  <div className="img">
                    <img
                      src={`http://localhost:8000/image/${item.photo}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="manage_right">
                  <h1>Name: {item.name}</h1>
                  <p>ID: {item._id}</p>
                  <div className="delete">
                    <p>Time: {new Date(item.createdAt).toLocaleString()}</p>
                  </div>
                  <div className="show_status">
                    <strong style={{ color: getStatusColor(item.status) }}>
                      Status: {item.status}
                    </strong>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <AiFillDelete />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ImployDataShow;
