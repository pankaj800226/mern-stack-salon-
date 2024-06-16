import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
interface Salon {
  name: string;
  photo: string;
  status: string;
}
const Instructoe = () => {
  const [alldata, setAllData] = useState<Salon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    // Fetch data from the server
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/impDataShow");
        setAllData(response.data);
        setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);

  const filteredData = alldata.filter((data) => {
    const isConform = data.status === "conform";
    return isAdmin || isConform;
  });

  return (
    <>
      <h2 className="imploy_top">All Instructor</h2>
      <div className="all_imployee_container">
        {loading ? (
          <Loading />
        ) : filteredData.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>Not Instructor yet</h2>
        ) : (
          filteredData.map((item) => (
            <div className="all_imployee">
              <div className="image">
                <img src={`http://localhost:8000/image/${item.photo}`} alt="" />
              </div>
              <div className="all_data_text">
                <h3>Name: {item.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Instructoe;
