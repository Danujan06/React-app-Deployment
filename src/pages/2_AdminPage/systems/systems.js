import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./systems.css";
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import { useParams, Link } from "react-router-dom";



function Systems(){
    // Items to add the form data
    const [formData, setFormData] = useState({
        systemId: 0,
        name: '',
        userName: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/systems/add', formData);

        // Set the success message in the state
        setSuccessMessage('System added successfully');

        // Clear the form data
        setFormData({
            systemId: 0,
            name: '',
            userName: '',
            email: '',
        });

        // Handle success, e.g., show a success message or redirect to another page
        console.log('System added successfully:', response.data);
        } catch (error) {
        // Handle error, e.g., show an error message to the user
        console.error('Error adding system:', error.message);
        }
    };

    // Funtions to showup the messages
    const [successMessage, setSuccessMessage] = useState(null);


    const [systems, setSystems] = useState([]);

    useEffect(() => {
        getAllSystems();
    },[]);

    const getAllSystems = async () => {
       // const response = await axios.get("https://automatedhydroponicssystemv2.el.r.appspot.com/api/v1/auth/systems/all");
        const response = await axios.get("http://localhost:8080/api/v1/auth/systems/all");
        setSystems(response.data);
    }

    const {id} = useParams();

    const deleteSystem = async (id) => {
        //await axios.delete(`https://automatedhydroponicssystemv2.el.r.appspot.com/api/v1/auth/systems/${id}`);
        await axios.delete(`http://localhost:8080/api/v1/auth/systems/${id}`);
        getAllSystems();
    }

    return (
        <>
            <AdminNavBar/>
            <div className="system-container row">
                <div className="system-title row">
                    <h2  style={{color:"rgb(20, 61, 3)"}}>Add New System</h2>
                </div>
                <div className="system-form row">
                    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                        <div className="system-id row">
                            <label htmlFor="systemid" className="form-label col-3">
                                System ID :
                            </label>
                            <input
                                type="text"
                                name="systemId"
                                className="form-control col"
                                id="systemid"
                                value={formData.systemId}
                                onChange={handleChange}
                                placeholder="xyz123#$%"
                            />
                        </div>
                        <div className="first-name row">
                            <label htmlFor="firstname" className="form-label col-3">
                                Name :
                            </label>
                            <input
                                type="text"
                                //name="firstname"
                                name="name"
                                className="form-control col"
                                id="firstname"
                                //value={formData.firstname}
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Alex"
                                required
                            />
                        </div>
                        
                        <div className="email row">
                            <label htmlFor="email" className="form-label col-3">
                                Email :
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control col"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example00@gmail.com"
                                required
                            />
                        </div>
                       

                        <div className="system-button-container row">
                            <button type="submit" className="btn btn-success mt-3" style={{width:"200px",backgroundColor:"#0D7817"}}>Add System</button>
                        </div>

                        {/* Display the success message if it exists */}
                        {successMessage && (
                            <div className="alert alert-success mt-3" role="alert">
                            {successMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="py-4">
                    <table className="table border shadow " style={{width: "80%", height: "fitContent", justifyContent: "center",marginLeft: "10%"}}>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">System ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {systems.map((system, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{system.systemId}</td>
                            <td>{system.name}</td>
                            <td>{system.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteSystem(system.systemId)}>
                                    Delete
                                </button>
                            </td>
                        </tr> 
                        ))}
                    </tbody>
                    </table>
            </div>
        </>
    )

}
export default Systems;

/*import React, { useState } from 'react';
import axios from 'axios';


const Systems = () => {
  const [formData, setFormData] = useState({
    systemId: 0,
    name: '',
    userName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/systems/add', formData);

      // Handle success, e.g., show a success message or redirect to another page
      console.log('System added successfully:', response.data);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error('Error adding system:', error.message);
    }
  };

  return (
    <div>
      <h2>Add New System</h2>
      <form onSubmit={handleSubmit}>
        <label>
          System ID:
          <input type="number" name="systemId" value={formData.systemId} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          User Name:
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Systems;
*/