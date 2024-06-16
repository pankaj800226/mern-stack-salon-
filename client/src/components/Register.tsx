import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("User created successfully", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.success("Please enter your email address and password", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="contact_container">
      <form onSubmit={handleSignUp}>
        <h2>SignUp</h2>

        <div className="form-group"></div>

        <div className="form-group">
          <input
            type="gmail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <input
            type="password" // Change type to password
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {/* <label onClick={hideShowHandler}>{hide ? <FaEye /> : <FiEyeOff />}</label> */}
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
