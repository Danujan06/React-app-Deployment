import React, { useState } from 'react';

const AddPlants = () => {
  const [plant, setPlant] = useState({
    name: '',
    details: '',
    image: null,
    phLow: 0,
    phHigh: 0,
    tdsHigh: 0,
    tdsLow: 0,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // Handle image file upload
      const file = e.target.files[0];
      setPlant({ ...plant, image: file });
    } else {
      setPlant({ ...plant, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(plant).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch('http://localhost:8080/api/v1/plants/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Plant registered successfully');
        // Reset the form after successful registration
        setPlant({
          name: '',
          details: '',
          image: null,
          phLow: 0,
          phHigh: 0,
          tdsHigh: 0,
          tdsLow: 0,
        });
      } else {
        console.error('Failed to register plant');
      }
    } catch (error) {
      console.error('Error during plant registration:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Plant Name:
          <input
            type="text"
            name="name"
            value={plant.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Plant Details:
          <textarea
            name="details"
            value={plant.details}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Plant Image:
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <br />
        <label>
          pH Range (Low - High):
          <input
            type="number"
            name="phLow"
            value={plant.phLow}
            onChange={handleChange}
            required
          />
          -
          <input
            type="number"
            name="phHigh"
            value={plant.phHigh}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          TDS Range (Low - High):
          <input
            type="number"
            name="tdsLow"
            value={plant.tdsLow}
            onChange={handleChange}
            required
          />
          -
          <input
            type="number"
            name="tdsHigh"
            value={plant.tdsHigh}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default AddPlants;
