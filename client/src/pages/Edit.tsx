import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [selectOption, setSelectOption] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };
  const obj: string[] = [
    "Hair Cut",
    "Manicure",
    "Hair Style",
    "Pedicure",
    "Hair Color",
    "Bridal",
  ];

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/edit/" + id, {
        selectOption,
        name,
        email,
        number,
        date,
        message,
      });
      navigate("/manage");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/getRoute/" + id)
      .then((result) => {
        setSelectOption(result.data.selectOption);
        setName(result.data.name);
        setEmail(result.data.email);
        setNumber(result.data.number);
        setDate(result.data.date);
        setMessage(result.data.message);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="booking">
      <h1>Book an Online Appointment</h1>
      <form onSubmit={handleEdit}>
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
        <button type="submit">Update </button>
      </form>
    </div>
  );
};

export default Edit;
