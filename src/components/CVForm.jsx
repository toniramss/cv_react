//import React from 'react';
import '../output.css';

import React, { useEffect, useState } from "react";

import { getGeneralInfo, getExperience1, getExperience2, getFormation, getLanguages, getPersonalCompetences, getTecnicCompetences } from './api.js';


const CVForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
    personalDescription: "",
    adress: "",
    postalCode: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aquí puedes hacer las llamadas a la API
        const generalInfo = await getGeneralInfo();

        setFormData({
          name: generalInfo.name || '',
          profession: generalInfo.profession || '',
          email: generalInfo.email || '',
          phone: generalInfo.phone || '',
          personalDescription: generalInfo.personalDescription || '',
          adress: generalInfo.adress || '',
          postalCode: generalInfo.postalCode || ''
        });
      } catch (err) {
        setError("Error al cargar los datos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    //console.log(generalInfo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await fetch("http://localhost/daw/Api_PHP/api-rest/update/update_general.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Respuesta de la API:", response.data);
      alert("Datos actualizados correctamente");
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      alert("Hubo un error al actualizar los datos");
    }



  };

  return (

    <div>

      <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex justify-center items-center">Modificar CV</h2>

      <form className="grid grid-cols-[1fr_2fr] gap-4 p-5 justify-start" onSubmit={handleSubmit}>


        <label className='text-blue-500 w-full text-left p-2'>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          className='bg-white ml-5 rounded-lg text-black p-2'
        />



        <label className='text-blue-500 w-full text-left p-2'>Profession:</label>
        <input
          type="text"
          name="profession"
          onChange={handleChange}
          required
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.profession}
        />

        <label className='text-blue-500 w-full text-left p-2'>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.email}
        />

        <label className='text-blue-500 w-full text-left p-2'>Phone:</label>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.phone}
        />

        <label className='text-blue-500 w-full text-left p-2'>Personal Description:</label>
        <textarea
          name="personalDescription"
          onChange={handleChange}
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.personalDescription}
        ></textarea>

        <label className='text-blue-500 w-full text-left p-2'>Address:</label>
        <input
          type="text"
          name="adress"
          onChange={handleChange}
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.adress}
        />

        <label className='text-blue-500 w-full text-left p-2'>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          onChange={handleChange}
          className='bg-white ml-5 rounded-lg text-black p-2'
          value={formData.postalCode}
        />

        <p></p>
        <p></p>

        <button className='bg-blue-500' type="submit">Actualizar datos</button>
      </form>
    </div>


  );
};

export default CVForm;