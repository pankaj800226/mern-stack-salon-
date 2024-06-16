import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
interface User {
  id: string;
  email: string;
  uid: string;
  user: string;
}
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      try {
        const users = await signInWithEmailAndPassword(auth, email, password);
        await localStorage.setItem("user", JSON.stringify(users));

        const user = users.user;
        const userDataString: string | null = localStorage.getItem("user");
        const localUser: User | null = userDataString
          ? (JSON.parse(userDataString) as User)
          : null;

        if (localUser && localUser.uid === user.uid) {
          navigate("/");
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        }
        toast.success("Login successfully", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.success("Any Error", {
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
    } else {
      toast.success("please all feild are fill", {
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
        <h2>Login</h2>

        <div className="form-group"></div>

        <div className="form-group">
          <input
            type="text"
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
          <button type="submit">Login</button>
          <span>
            {/* Already have an account? <Link to="/register">Signup</Link> */}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
