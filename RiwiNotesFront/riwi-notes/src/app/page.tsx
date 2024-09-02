"use client";

import { Button } from "@mui/base";
import Note from "./components/Note";

//Icons
import AddIcon from "@mui/icons-material/Add";
import { getAll, noteType } from "@/app/service/NoteService";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataNotes, setDataNotes] = useState<noteType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getAll()
        .then((data) => setDataNotes(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <main className="w-full p-8 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-2xl">My Notes</h1>

      <Button className="rounded-full w-8 h-8 flex justify-center items-center bg-yellow-600 hover:scale-110 transition">
        <AddIcon />
      </Button>

      <div className="w-full h-[70vh] flex flex-wrap justify-center gap-4 py-5 overflow-y-auto">
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
  );
}
