import React, { useEffect, useState } from "react";

const CVDisplay = () => {
  const [formation, setFormation] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_formation.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setFormation(result);
      } catch (err) {
        setError(err.message + "line 81");
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
          {/*Contenedor formación*/}
          <div>
            <br></br><br></br><br></br>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex justify-center items-center">Formación académica</h2>
            <br></br>
            {formation.map((formation) => (
              <div key={formation.idFormation}>
                <p><strong>Enseñanza:</strong> {formation.name}</p>
                <p><strong>Centro:</strong> {formation.school}</p>
                <p><strong>Ciudad:</strong> {formation.city}</p>
                <p><strong>Duración:</strong> {formation.duration}</p>
                <br></br>
              </div>
              
            ))}
          </div>


        </div>




      )}
    </div>
  );
};

export default CVDisplay;