import { useEffect, useState } from "react";
import SidebarNavbar from "../components/SidebarNavbar";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

// Define the interface for the Salon data type
interface Salon {
  _id: string;
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
  selectOption: string;
  createdAt: string;
  status: string;
  photo: string;
  pincode: string;
  address: string;
}

const ImployDataShow = () => {
  const [alldata, setAllData] = useState<Salon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/imployJoinStatus/${id}`,
        { status }
      );
      setAllData((prevData) =>
        prevData.map((data) =>
          data._id === id ? { ...data, status: res.data.status } : data
        )
      );
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
                    <p>City : {item.address}</p>
                    <p>Email : {item.email}</p>
                    <p>Pincode : {item.pincode}</p>
                    <p>Number : {item.phoneNumber }</p>
                  </div>
                  <div className="order_status">
                    <strong style={{ color: getStatusColor(item.status) }}>
                      Status: {item.status}
                    </strong>
                    <select
                      value={item.status}
                      onChange={(e) =>
                        handleStatusChange(item._id, e.target.value)
                      }
                    >
                      <option value="waiting">Select</option>
                      <option value="conform">Conform</option>
                      <option value="cancel">Cancel</option>
                    </select>
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
