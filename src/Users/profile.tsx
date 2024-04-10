import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as client from "./client";
import { Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });

  const navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (error: any) {
      alert(error.response.data.message);
      navigate("/Kanbas/Account/Signin");
    }
  };

  const save = async () => {
    await client.updateUser(profile);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  {
    console.log("user profile: ", profile);
  }

  return (
    <div className="container d-flex flex-column">
      <h1>Profile</h1>
      <Link
        className="btn btn-warning btn-sm w-25 mb-3"
        to="/Kanbas/Account/Admin/Users"
      >
        Users
      </Link>
      {profile && (
        <div className="d-flex flex-column">
          <label className="mb-2">
            username:
            <input
              value={profile.username}
              onChange={(e) => {
                setProfile({ ...profile, username: e.target.value });
              }}
            />
          </label>

          <label className="mb-2">
            password:
            <input
              type={"password"}
              value={profile.password}
              onChange={(e) => {
                setProfile({ ...profile, password: e.target.value });
              }}
            />
          </label>

          <label className="mb-2">
            firstName:
            <input
              value={profile.firstName}
              onChange={(e) => {
                setProfile({ ...profile, firstName: e.target.value });
              }}
            />
          </label>

          <label className="mb-2">
            lastName:
            <input
              value={profile.lastName}
              onChange={(e) => {
                setProfile({ ...profile, lastName: e.target.value });
              }}
            />
          </label>

          <label className="mb-2">
            DOB:
            <input
              value={profile.dob}
              type="date"
              onChange={(e) => {
                setProfile({ ...profile, dob: e.target.value });
              }}
            />
          </label>

          <label className="mb-2">
            Email:
            <input
              value={profile.email}
              onChange={(e) => {
                setProfile({ ...profile, email: e.target.value });
              }}
            />
          </label>

          <select
            className="mb-2 w-25"
            onChange={(e) => {
              setProfile({ ...profile, role: e.target.value });
            }}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-warning btn-sm w-25 mb-1" onClick={save}>
            Save
          </button>
          <button className="btn btn-primary btn-sm w-25" onClick={signout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
