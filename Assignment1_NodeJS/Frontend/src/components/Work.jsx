import React, { useState } from 'react';

const Work = () => {
  const [info, setInfo] = useState(null); // State to store the result

  // Generic function to fetch data
  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:3000/${endpoint}`);
      const result = await response.json();
      
      // If data is an object (like User Info), stringify it for display
      const displayData = typeof result.data === 'object' 
        ? JSON.stringify(result.data, null, 2) 
        : result.data;

      setInfo(`${result.title}: ${displayData}`);
    } catch (error) {
      console.error("Error fetching data:", error);
      setInfo("Error fetching data from backend");
    }
  };

  return (
    <div className="work-container">
      <h1 className="work-heading">Work with Node JS</h1>
      
      <div className="button-group">
        <button onClick={() => fetchData('total-memory')}>Total Memory</button>
        <button onClick={() => fetchData('free-memory')}>Free Memory</button>
        <button onClick={() => fetchData('user-info')}>User Info</button>
        <button onClick={() => fetchData('cpu-arch')}>CPU Architecture</button>
      </div>

      {/* Display Area for the Result */}
      {info && (
        <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
          <pre>{info}</pre>
        </div>
      )}
    </div>
  );
};

export default Work;