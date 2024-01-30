/*import React, {useEffect, useState} from "react";
import SYSTEM_IMAGE from "../../../Images/System.jpg"
import "./AdminHome.css";
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import axios from "axios";

function AdminHome() {*/
    /* const [systemData, setSystemData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/system/all')
        .then((response) => {
        setSystemData(response.data);
        })   
    }, []);
*/

    /*const systemData =[ 
        {
            name: "user01@gmail.com",
            Hardware_setup_id: 1234556,
        },  
        {
            name: "user02@gmail.com",
            Hardware_setup_id: 1234557, 
        },
        {
            name: "user03@gmail.com",
            Hardware_setup_id: 1234558,
        },
        {
            name: "user04@gmail.com",
            Hardware_setup_id: 1234559,
        }
      ]

      return(
        <>
        <AdminNavBar/> 
        <div className="main-container row">
            <div className="Home-container row">
                <div className="plant-container row">
                    <br></br>
                    <h1>Exsisting Systems</h1>
                    {systemData.map((system) => (
                        <div className="plant-card row" key={system.id}>
                            <div className="plant-image-container col-md-2">
                                <img className="plant-image" src={SYSTEM_IMAGE} />
                            </div>

                            <div className="plAnt-data-container col-md-8">
                                <ul>
                                    <li><h4> System ID : {system.Hardware_setup_id}</h4></li>
                                    <li>User Name : {system.name}</li>
                                </ul>
                            </div>

                            <div className="plant-button-container col-md-2">
                                    <button className="btn" style={{backgroundColor:"#0D7817", color:"white"}}>Go</button>
                            </div>
                        </div>      
                    ))}
                </div>
            </div>
        </div>
        </>
      )*/
    /*const [systems, setSystems] = useState([]);

    useEffect(() => {
        loadSystems();
    }, []);

    const loadSystems = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/auth/systems/all");
            setSystems(response.data);
        } catch (error) {
            console.error('Error loading systems:', error);
        }
    };

    // ... (existing code)

    return (
        <>
            <AdminNavBar/>
            <div className="register-container row">
                <div className="register-title row">
                    <h2 style={{color:"rgb(20, 61, 3)"}}>Add a New User</h2>
                </div>
                <div className="register-form row">
                    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                        

                        <div className="register-button-container row">
                            <button type="submit" className="btn btn-success mt-3" style={{ width: "100px", backgroundColor: "#0D7817" }}>Register</button>
                            {registrationMessage && <p>{registrationMessage}</p>}
                        </div>
                    </form>
                </div>

                <div className="system-list">
                    <h2>System List</h2>
                    <ul>
                        {systems.map((system) => (
                            <li key={system.systemId}>{system.name} - {system.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
      
}

export default AdminHome;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>Admin Home</h1>
      {systems.map(system => (
        <div key={system.systemId} className="card">
          <div className="card-body">
            <h5 className="card-title">{system.name}</h5>
            <p className="card-text">Email: {system.email}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminHome;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import './AdminHome.css'; // Import the CSS file

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div className='container'>
            
            <div className = "text-center">
                <h1 >Admin Home</h1>
            </div>
            <div className="row">
                {systems.map(system => (
                    <div key={system.systemId} className="card">
                        <div className="card-body">
                            <h5 className="card-title">System ID: {system.systemId}</h5>
                            <p className="card-text">Name: {system.name}</p>
                            <p className="card-text">Email: {system.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    
  );
};

export default AdminHome;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Admin Home</h1>
        </div>
        <div>
            {systems.map(system => (
                <div key={system.systemId} style={{
                    width: '30%', // Adjust as needed
                    marginBottom: '20px', // Add spacing between cards
                    border: '1px solid #ddd', // Optional: Add a border for visual separation
                    borderRadius: '8px', // Optional: Add border-radius for rounded corners
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add box-shadow for a subtle lift
                }}>
                    <div style={{ padding: '16px' }}>
                        <h5 style={{ marginBottom: '8px' }}>System ID: {system.systemId}</h5>
                        <p style={{ marginBottom: '8px' }}>Name: {system.name}</p>
                        <p>Email: {system.email}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default AdminHome;*/

/* The correct one */
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Admin Home</h1>
        </div>
        <div style={{ width: '30%', margin: '0 auto' }}>
            {systems.map(system => (
                <div key={system.systemId} style={{
                    marginBottom: '20px', // Add spacing between cards
                    border: '1px solid #ddd', // Optional: Add a border for visual separation
                    borderRadius: '8px', // Optional: Add border-radius for rounded corners
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add box-shadow for a subtle lift
                }}>
                    <div style={{ padding: '16px' }}>
                        <h5 style={{ marginBottom: '8px' }}>System ID: {system.systemId}</h5>
                        <p style={{ marginBottom: '8px' }}>Name: {system.name}</p>
                        <p>Email: {system.email}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default AdminHome;*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import './AdminHome.css'; // Import the CSS file

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div className='container'>
            <div className="text-center">
                <h1>Admin Home</h1>
            </div>
            <div className="row row-cols-1 g-4">
                {systems.map(system => (
                    <div key={system.systemId} className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">System ID: {system.systemId}</h5>
                                <p className="card-text">Name: {system.name}</p>
                                <p className="card-text">Email: {system.email}</p>
                                <button className="btn btn-success">Go</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default AdminHome;
*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import './AdminHome.css'; // Import the CSS file

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div className='container'>
            <div className="text-center">
                <h1>Admin Home</h1>
            </div>
            <div className="row row-cols-1 g-4">
                {systems.map(system => (
                    <div key={system.systemId} className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    {system.imageUrl && (
                                        <img src={system.imageUrl} alt="System Image" className="img-thumbnail mr-3" />
                                    )}
                                    <div>
                                        <h5 className="card-title">System ID: {system.systemId}</h5>
                                        <p className="card-text">Name: {system.name}</p>
                                        <p className="card-text">Email: {system.email}</p>
                                        <button className="btn btn-success">Go</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default AdminHome;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from "../../../components/Admin_Navbar/AdminNavBar";
import './AdminHome.css'; // Import the CSS file
import SYSTEM_IMAGE from "../../../Images/System.jpg"
// Define a static image URL
const staticImageUrl = 'https://getgrowee.com/product/full-automation/'; // Replace this URL with the actual image URL

const AdminHome = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    axios.get('https://springapplicationv1.el.r.appspot.com/api/v1/auth/systems/all')
      .then(response => setSystems(response.data))
      .catch(error => console.error('Error fetching systems:', error));
  }, []);

  return (
    <>
        <AdminNavBar/> 
        <div className='container'>
            <div className="text-center">
                <h1>Admin Home</h1>
            </div>
            <div className="row row-cols-1 g-4">
                {systems.map(system => (
                    <div key={system.systemId} className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                <div className="plant-image-container col-md-2">
                                    <img className="plant-image" src={SYSTEM_IMAGE} />
                                </div>
                                    <div>
                                        <h5 className="card-title">System ID: {system.systemId}</h5>
                                        <p className="card-text">Name: {system.name}</p>
                                        <p className="card-text">Email: {system.email}</p>
                                        <button className="btn btn-success">Go</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default AdminHome;

