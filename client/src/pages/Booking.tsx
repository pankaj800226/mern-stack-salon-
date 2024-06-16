import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Book: React.FC = () => {
  const [selectOption, setSelectOption] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  const navigate = useNavigate();

  const obj: string[] = [
    "Hair Cut",
    "Manicure",
    "Hair Style",
    "Pedicure",
    "Hair Color",
    "Bridal",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (
        selectOption !== "" ||
        name !== "" ||
        email !== "" ||
        number !== "" ||
        date !== "" ||
        message !== ""
      ) {
        toast.success("successfully");
        await axios.post("http://localhost:8000/create", {
          selectOption,
          name,
          email,
          number,
          date,
          message,
        });

        navigate("/manage");
      } else {
        toast("🦄 Please fill in all fields!", {
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
    } catch (error) {
      console.log("error");
      toast(`error: ${error}`, {
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

    setSelectOption("");
    setName("");
    setEmail("");
    setNumber("");
    setDate("");
    setMessage("");
  };

  return (
    <>
      <div className="booking">
        <h1>Book an Online Appointment</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div>
            <label>Service Required</label>
            <select value={selectOption} onChange={handleSelectChange}>
              <option value="" disabled>
                Select a service
              </option>
              {obj.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Date of Service</label>
            <input
              type="date"
              placeholder="Date of Service"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Book;
