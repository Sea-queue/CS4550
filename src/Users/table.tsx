import { useState, useEffect } from "react";
import { User } from "./client";
import * as client from "./client";
import { Link } from "react-router-dom";
import { BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [singleUser, setSingleUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(singleUser);
      setUsers([newUser, ...users]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>
        User Table
        <Link className="btn btn-warning ms-3" to="/Kanbas/Account/Profile">
          My Profile
        </Link>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
          <tr>
            <td>
              <input
                placeholder="username"
                onChange={(e) => {
                  setSingleUser({ ...singleUser, username: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="password"
                value={singleUser.password}
                onChange={(e) => {
                  setSingleUser({ ...singleUser, password: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                placeholder="firstName"
                onChange={(e) => {
                  setSingleUser({ ...singleUser, firstName: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                placeholder="lastName"
                onChange={(e) => {
                  setSingleUser({ ...singleUser, lastName: e.target.value });
                }}
              />
            </td>
            <td>
              <select
                value={singleUser.role}
                onChange={(e) => {
                  setSingleUser({ ...singleUser, role: e.target.value });
                }}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsPlusCircleFill onClick={createUser} />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user)}
                >
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
