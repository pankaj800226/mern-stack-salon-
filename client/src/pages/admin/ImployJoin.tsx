import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import SidebarNavbar from "../../components/SidebarNavbar";

const ImployJoin: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name !== "" ||
      phoneNumber !== "" ||
      address !== "" ||
      pincode !== "" ||
      email !== "" ||
      file !== null
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phoneNumber", phoneNumber);
      formData.append("address", address);
      formData.append("pincode", pincode);
      formData.append("email", email);
      if (file) {
        formData.append("file", file);
      }
      try {
        await axios.post("http://localhost:8000/upload", formData);

        toast("🦄 upload succesfully!", {
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
        toast(`🦄 ${error}`, {
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
      setName("");
      setPhoneNumber("");
      setPincode("");
      setAddress("");
      setEmail("");
    } else {
      toast("🦄 Please fill out all fields!!", {
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

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="dashboard_container">
      <SidebarNavbar />
      <main>
        <div className="contact_container">
          <form onSubmit={handleSubmit}>
            <p>If you want to work in my salon, so field Box</p>

            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                placeholder="Upload your file"
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
            <div className="Auth_btn"></div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ImployJoin;
