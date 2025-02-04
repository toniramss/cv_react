import React, { useEffect, useState } from "react";

const CVDisplay = () => {
  const [generalInfo, setGeneralInfo] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_general.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setGeneralInfo(result[0]);
      } catch (err) {
        setError(err.message + "line 24");
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

          {/*Contenedor datos generales*/}
          <div className="text-left">

            <div className="flex flex-row">
              <p><img src="../../public/imagen.jpg" alt={generalInfo.name} style={{ maxWidth: "200px" }} /></p>
              <h1 className="text-5xl font-bold text-left ml-4 flex items-end">{generalInfo.name}</h1>
            </div>

            <br></br>


            <p><strong>Profession:</strong> {generalInfo.profession}</p>
            <p><strong>Email:</strong> {generalInfo.email}</p>
            <p><strong>Phone:</strong> {generalInfo.phone}</p>
            <p><strong>Personal Description:</strong> {generalInfo.personalDescription}</p>
            <p><strong>Address:</strong> {generalInfo.adress}</p>
            <p><strong>Postal Code:</strong> {generalInfo.postalCode}</p>
          </div>







        </div>

      )}
    </div>
  );
};

export default CVDisplay;


