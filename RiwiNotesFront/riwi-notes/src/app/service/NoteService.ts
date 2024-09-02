// Define la interfaz noteType
export interface noteType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

//URL
const API_URL = "http://localhost:8080/api/v1/notes";

// Implementación de la función getAll
export const getAll = async (): Promise<noteType[] | []> => {
  return await fetch(`${API_URL}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error desde db");
      }

      return response.json();
    })
    .then((data) => {
      return data.content;
    })
    .catch((error) => {
      alert("Error al traer todos las notas");
      console.error(error);
      return [];
    });
};
