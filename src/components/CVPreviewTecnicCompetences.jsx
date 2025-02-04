import React, { useEffect, useState } from "react";

const CVDisplay = () => {
  
  const [tecnicCompetences, setTecnicCompetences] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_tecnicCompetences.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setTecnicCompetences(result);
      } catch (err) {
        setError(err.message + "line 119");
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
          {/*Contenedor competencias técnicas*/}
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Competencias técnicas</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              {/* Cabecera */}
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-center">Competencia</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Herramienta</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Icono</th>
                
                </tr>
              </thead>

              {/* Cuerpo de la tabla */}
              <tbody>
                {tecnicCompetences.map((tecnicCompetence) => (
                  <tr key={tecnicCompetence.idTecnic}>
                    <td className="border border-gray-300 px-4 py-4 ">{tecnicCompetence.name}</td>
                    <td className="border border-gray-300 px-4 py-2 ">{tecnicCompetence.tools}</td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center h-full w-40">
                      <img
                        
                        src={`../public/${tecnicCompetence.name}.png`}
                        alt={tecnicCompetence.name}
                        className="w-10 h-full"
                      />
                      <img
                        
                        src={`../public/${tecnicCompetence.tools}.png`}
                        alt={tecnicCompetence.tools}
                        className="w-10 ml-5 "
                      />

                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>




      )}
    </div>
  );
};

export default CVDisplay;