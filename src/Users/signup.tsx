import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import { FaRegUser } from "react-icons/fa";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    if (user.username && user.password) {
      try {
        await client.signup(user);
        navigate("/Kanbas/Account/Profile");
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      alert("Please fill both fields!");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="d-flex flex-column w-50">
        <h1>
          Singup <FaRegUser />
        </h1>
        {error && <div>{error}</div>}
        <input
          className="mb-2"
          placeholder="username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          className="mb-2"
          placeholder="password"
          type="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button className="btn btn-primary btn-sm mb-1" onClick={signup}>
          Signup
        </button>
        <Link className="btn btn-warning btn-sm" to="/Kanbas/Account/Signin">
          Signin
        </Link>
      </div>
    </div>
  );
}
