import { Link, useParams } from "react-router-dom";
import { service } from "../components/api/serviceApi";
import svgText from "../assets/text.svg";
import img from "../assets/hair1.jpg";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const ServiceDetails = () => {
  const [email, setEmail] = useState<string>("");
  const { itemId } = useParams();
  const allData = service.find((item) => item.id === itemId);
  console.log(allData);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== "") {
      try {
        await axios.post("http://localhost:8000/support", { email });
        toast.success("Thank You  !", {
          position: "bottom-left",
          autoClose: 2000,
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
    } else {
      toast.success("Please enter your Email", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setEmail("");
  };

  return (
    <>
      <div className="service_details_logo">
        <Link to={"/"}>
          <img src={svgText} alt="Logo" />
        </Link>
      </div>
      <div className="service_details">
        <div className="service_details_left">
          <img src={allData?.img} alt={allData?.text} />
        </div>
        <div className="service_details_right">
          <h1>{allData?.text}</h1>
        </div>
      </div>

      <div className="service_facility">
        <h1>List</h1>
        {allData?.facility &&
          Object.values(allData.facility).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </div>

      <div className="service_second_section">
        <div className="service_second_section_left">
          <img src={img} alt="" />
        </div>
        <div className="service_second_section_right">
          <h1>Please Suppot Me And Enjoy This Salon</h1>
          <p>Sign up to get 30% your first service</p>
          <div className="subscribe">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email ID"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
