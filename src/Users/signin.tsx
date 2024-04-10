import { useState } from "react";
import { useNavigate } from "react-router";
import { User } from "./client";
import * as client from "./client";
import { Link } from "react-router-dom";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const navigate = useNavigate();
  const signin = async () => {
    if (credentials.username && credentials.password) {
      try {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
      } catch (error: any) {
        alert("try again");
      }
    } else {
      alert("Please enter both fields!");
    }
  };

  return (
    <div className="container d-flex flex-column">
      <h1>Signin</h1>
      <input
        className="w-25 mb-2"
        placeholder="username"
        onChange={(e) => {
          setCredentials({ ...credentials, username: e.target.value });
        }}
      />
      <input
        className="w-25 mb-2"
        type={"password"}
        placeholder="password"
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
      />
      <button
        className="btn btn-primary btn-sm w-25 mb-1 mt-1"
        onClick={signin}
      >
        Signin
      </button>
      <Link className="btn btn-warning btn-sm w-25" to="/Kanbas/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
