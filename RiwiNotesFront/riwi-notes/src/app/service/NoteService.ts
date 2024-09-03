// Define la interfaz noteType
export interface noteType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

//URL
const API_URL = "http://localhost:8080/api/v1/notes";

// GetAll
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

//Save
export const save = async (dataSave: noteType): Promise<noteType> => {
  return await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataSave),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(`Message db: ${error}`);
      alert("Error al guardar los datos");
      return error;
    });
};

//Update
export const update = async (dataSave: noteType): Promise<noteType> => {
  return await fetch(`${API_URL}/${dataSave.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataSave),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(`Message db: ${error}`);
      alert("Error al guardar los datos");
      return error;
    });
};

//Delete
export const deleteNote = async (id: string) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!(response.status === 204)) throw new Error(response.statusText);
    })
    .catch((err) => err);
};
