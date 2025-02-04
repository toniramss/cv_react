export const getGeneralInfo = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_general.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;

      } catch (err) {
        throw err;
      }
};
export const getExperience1 = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_experience.php?idExperience=1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result[0];

      } catch (err) {
        throw err;
      } 
};
export const getExperience2 = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_experience.php?idExperience=2");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result[0];

    } catch (err) {
        throw err;
    }
}
export const getFormation = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_formation.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;

      } catch (err) {
        throw err;
      }
};
export const getLanguages = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_languages.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;

      } catch (err) {
        throw err;
      }
};
export const getPersonalCompetences = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_personalCompetences.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;

      } catch (err) {
        throw err;
      }
};
export const getTecnicCompetences = async () => {
    try {
        const response = await fetch("http://localhost/daw/Api_PHP/api-rest/get/get_tecnicCompetences.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        return result;

      } catch (err) {
        throw err;
      }
};
