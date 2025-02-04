import React, { useEffect, useState } from "react";

const CVDisplay = () => {
const [languages, setLanguages] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_languages.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setLanguages(result);
      } catch (err) {
        setError(err.message + "line 62");
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

          {/*Contenedor languages*/}

          <div>

            <hr></hr>

            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Idiomas</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              {/* Cabecera */}
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-center">Idioma</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Nivel</th>
                </tr>
              </thead>

              {/* Cuerpo de la tabla */}
              <tbody>
                {languages.map((language) => (
                  <tr key={language.idLanguage}>
                    <td className="border border-gray-300 px-4 py-2">{language.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{language.level}</td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-center">
                      <img
                        src={`../public/${language.name}.png`}
                        alt={language.name}
                        className="w-16  "
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