import React, { useState, useEffect } from 'react';

function TestAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    fetch('http://localhost:5001/api/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from the API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestAPI;
