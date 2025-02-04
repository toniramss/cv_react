import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CVDisplay = () => {
  const [personalCompetences, setPersonalCompetences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_personalCompetences.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setPersonalCompetences(result);
      } catch (err) {
        setError(err.message + " line 100");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Datos del gráfico
  const data = {
    labels: [personalCompetences[0].description, personalCompetences[1].description, personalCompetences[2].description, personalCompetences[3].description, personalCompetences[4].description, personalCompetences[5].description], // Etiquetas en el eje X
    datasets: [
      {
        label: "Valor", // Título de la serie de datos
        data: [personalCompetences[0].value, personalCompetences[1].value, personalCompetences[2].value, personalCompetences[3].value, personalCompetences[4].value, personalCompetences[5].value], // Valores de los datos
        backgroundColor: "rgba(23, 75, 207, 0.2)", // Color de fondo de las barras
        borderColor: "rgb(6, 63, 91)", // Color del borde de las barras
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      }
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Gráfico competencias personales</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CVDisplay;
