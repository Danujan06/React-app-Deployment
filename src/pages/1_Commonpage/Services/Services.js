import React from "react";
import "./Services.css";
import CommonNavBar from "../../../components/Common_NavBar/Common_Navbar";
import Prototype from "../../../Images/prototype.jpg";

function Services() {
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
    },
    {
      id: 2,
      name: "Cerry Tomatoes",
    },
    {
      id: 3,
      name: "Mint",
    },
    {
      id: 4,
      name: "Rose",
    },
    {
      id: 5,
      name: "Sunflower",
    },
    {
      id: 6,
      name: "Chilli",
    }
    
  ];

  return (
    <>
      <CommonNavBar/>
      <div className="pagefive-container row">
        <div className="page-five-content row">
          <div className="page-five-content-left col">
            <h2 style={{ textAlign: "center", padding: "20px" }}>Overview Of Our System</h2>
            <div className="left-content">
              <img src={Prototype} alt="prototype" id="page-five-prototype-image" />
            </div>
            <div className="price-button-container">
              <h3 style={{ textAlign: "center"/*, padding: "20px"*/ }}>Price :</h3>
              <button id="price-button">Rs 40,000.00</button>
            </div>
          </div>
          <div className="page-five-content-right col">
            <h2 style={{ textAlign: "center", padding: "20px" }}>Available Plants</h2>
            <div className = "table-container">
                <table className="table border shadow">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Plant Name</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {plants.map((plant, index) => (
                      <tr key={plant.id}>
                        <td scope="row">{index + 1}</td>
                        <td>{plant.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
