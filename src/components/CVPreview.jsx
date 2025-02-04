import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

import CVPreviewGeneral from './CVPreviewGeneral';
import CVPreviewExperience from './CVPreviewExperience';
import CVPreviewFormation from './CVPreviewFormation';
import CVPreviewLanguages from './CVPreviewLanguages';
import CVPreviewPersonalCompetences from './CVPreviewPersonalCompetences';
import CVPreviewTecnicCompetences from './CVPreviewTecnicCompetences';

import CVForm from './CVForm';



import { getGeneralInfo, getExperience1, getExperience2, getFormation, getLanguages, getPersonalCompetences, getTecnicCompetences } from './api.js';



function generatePDF() {
  const doc = new jsPDF();
  doc.text("Curriculum Vitae", 10, 10);
  // Añadir más detalles...
  doc.save("cv.pdf");
 }


const CVPreview = () => {


  return (
    <div>
      {(
        <div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
            <div className="bg-gray-200 p-8 text-blue-900 w-full rounded-lg">
              <CVPreviewGeneral />
            </div>



            <div className="bg-gray-200 p-4 text-blue-900 w-full rounded-lg">
              <CVPreviewFormation />
            </div>

            <div className="bg-gray-200 p-4 text-blue-900 w-full rounded-lg">
              <CVPreviewLanguages />
            </div>

            <div className="bg-gray-200 p-4 text-blue-900 w-full rounded-lg">
              <CVPreviewPersonalCompetences />
            </div>

            <div className="bg-gray-200 p-4 text-blue-900 w-full rounded-lg">
              <CVPreviewTecnicCompetences />
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <CVForm/>
            </div>

            <div>
              <button onClick={generatePDF}>Descargar PDF</button>
            </div>


          </div>

        </div>

      )}
    </div>
  );
};

export default CVPreview