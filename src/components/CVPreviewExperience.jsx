import React, { useEffect, useState } from "react";

const CVDisplay = () => {
  const [experience1, setExperience1] = useState(null);
  const [experience2, setExperience2] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_experience.php?idExperience=1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setExperience1(result[0]);
      } catch (err) {
        setError(err.message + "line 43");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_experience.php?idExperience=2");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setExperience2(result[0]);
      } catch (err) {
        setError(err.message + "line 43");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {(
        <div>

          <hr></hr>

          {/*Contenedor experiencia*/}

          <h2>Experience</h2>

          <p>Company name: {experience1.companyName} </p>
          <p>Duration: {experience1.duration} </p>

          <h5>Tasks:</h5>
          


          <p>Company name: {experience2.companyName} </p>
          <p>Duration: {experience2.duration} </p>

          <h5>Tasks:</h5>


        </div>




      )}
    </div>
  );
};

export default CVDisplay;