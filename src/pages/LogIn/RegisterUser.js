import React, { useState, useEffect } from "react";
import "./RegisterUser.css";
import axios from 'axios';
import AdminNavBar from "../../components/Admin_Navbar/AdminNavBar";

function RegisterUser() {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: '', 
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('https://springapplicationv1.el.r.appspot.com/api/v1/auth/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.status) {
            console.log('User registered successfully');
            alert("Registration successful");
            // Reset the form after successful registration
            setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            role: '',
            });
        } else {
            console.error('Failed to register user');
        }
        } catch (error) {
        console.error('Error during registration:', error);
        }
    };
    const [registrationMessage, setRegistrationMessage] = useState(null);
    const [registrationError, setRegistrationError] = useState(null);

    const [users, setUsers] = useState([]);

    /*useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/auth/users/all");
        setUsers(result.data.reverse());
    };*/

    return (
        <>
            <AdminNavBar/>
            <div className="register-container row">
                <div className="register-title row">
                    <h2  style={{color:"rgb(20, 61, 3)"}}>Add a New User</h2>
                </div>
                <div className="register-form row">
                    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                        <div className="first-name row">
                            <label htmlFor="firstname" className="form-label col-3">
                                First Name* :
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                className="form-control col"
                                id="firstname"
                                value={user.firstname}
                                onChange={handleChange}
                                placeholder="Alex"
                                required
                            />
                        </div>
                        <div className="last-name row">
                            <label htmlFor="lastname" className="form-label col-3">
                                Last Name* :
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                className="form-control col"
                                id="lastname"
                                value={user.lastname}
                                onChange={handleChange}
                                placeholder="Williom"
                                required
                            />
                        </div>
                        <div className="email row">
                            <label htmlFor="email" className="form-label col-3">
                                Email* :
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control col"
                                id="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="example00@gmail.com"
                                required
                            />
                        </div>

                        <div className="password row">
                            <label htmlFor="password" className="form-label col-3">
                                Password* :
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control col"
                                id="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="password@#$%12"
                                required
                            />
                        </div>

                        <div className="role row">
                            <label htmlFor="role" className="form-label col-3">
                                Role* :
                            </label>
                            <select name="role" className="form-control col" value={user.role} onChange={handleChange} required>
                                <option value="" disabled>Select a role</option>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="MANAGER">Manager</option>
                            </select>
                        </div>

                        

                        <div className="register-button-container row">
                            <button type="submit" className="btn btn-success mt-3" style={{width:"100px",backgroundColor:"#0D7817"}}>Register</button>
                          
                        </div>
                    </form>
                    

                </div>
                {/*
                  <div className="register-title row">
                      <h2  style={{color:"rgb(20, 61, 3)"}}>Existing Users</h2>
                  </div>
                  <div className="py-4">
                      <table className="table border shadow " style={{width: "80%", height: "fitContent", justifyContent: "center",marginLeft: "10%"}}>
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Role</th>
                              <th scope="col">Password</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody className="table-group-divider">
                          {users.map((user, index) => (
                          <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{user.firstname}</td>
                              <td>{user.lastname}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                          </tr> 
                          ))}
                      </tbody>
                  </table>
                </div>
                 */}
                
            </div>
        </>
    )
}

export default RegisterUser;

/*
import React, { useState } from 'react';

const RegisterUser = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '', // Remove the default value
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('User registered successfully');
        // Reset the form after successful registration
        setUser({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          role: '',
        });
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Role:
          <select name="role" value={user.role} onChange={handleChange} required>
            <option value="" disabled>Select a role</option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="MANAGER">Manager</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;*/
