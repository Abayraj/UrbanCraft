// src/pages/details.js

import React from 'react';
import { useLocation } from '@reach/router';


const Details = () => {
  const location = useLocation();
  const { someData } = location.state || {}; // Access the data passed from the Link

  return (
    <div>
      <h1>Details Page</h1>
      {someData ? (
        <div>
          <h2>{someData.title}</h2>
          <p>{someData.description}</p>
          {/* Render more details as needed */}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Details;


