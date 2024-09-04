"use client";

import Note from "./components/Note";

//Icons
import { getAll, noteType } from "@/app/service/NoteService";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import { createContext } from "react";

export const DataNoteContext = createContext<Dispatch<
  SetStateAction<noteType[] | null>
> | null>(null);

export default function Home() {
  const [dataNotes, setDataNotes] = useState<noteType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDataDB = async () => {
    await getAll()
      .then((data) => setDataNotes(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getDataDB();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <DataNoteContext.Provider value={setDataNotes}>
      <main className="w-full p-8 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold">
          My <span className="text-yellow-500">Notes</span>
        </h1>

        <AddNote />

        <div className="w-full max-h-[70vh] flex flex-wrap  justify-center gap-4 py-5 overflow-y-auto">
          {dataNotes === null ? (
            <p className="text-2xl font-bold">No notes available</p>
          ) : dataNotes.length === 0 ? (
            <p className="text-2xl font-bold">Add a new note</p>
          ) : (
            dataNotes.map((note, index) => (
              <Note key={note.title + index} {...note} />
            ))
          )}
        </div>
      </main>
    </DataNoteContext.Provider>
  );
}
