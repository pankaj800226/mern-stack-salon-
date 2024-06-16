import { useEffect, useState } from "react";
import axios from "axios";
import SidebarNavbar from "../components/SidebarNavbar";
import Loading from "../components/Loading";

interface Salon {
  _id: string;
  name: string;
  email: string;
  number: number;
  message: string;
  selectOption: string;
  status: string;
  createdAt: string;
}

const Manage = () => {
  const [alldata, setAllData] = useState<Salon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/showData");
        setAllData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []); // Fetch data only once when the component mounts

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/updateStatus/${id}`,
        { status }
      );
      setAllData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, status: response.data.status } : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilter = alldata.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

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
                  <p>{new Date(item.createdAt).toLocaleString()}</p>
                </div>
                <div className="manage_right">
                  <p>Number: {item.number}</p>
                  <strong>Style: {item.selectOption}</strong>
                  <h2>Comment: {item.message}</h2>
                  <div>
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
                        <option value="booked">Booked</option>
                        <option value="cancel">Cancel</option>
                      </select>
                    </div>
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

export default Manage;
