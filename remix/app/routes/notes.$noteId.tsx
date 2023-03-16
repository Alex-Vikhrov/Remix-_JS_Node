// $ Сигнализирует Remix что это динамический маршрут
import { Link, useLoaderData } from "@remix-run/react";
import { FC } from "react";
import { getStoredNotes } from "~/data/notes";

// type TNoteDetailsPage = {
//     title: string;
//     content: string;
// };

export const loader = async ({ params }: any) => {
    const notes = await getStoredNotes();
    const noteId = params.noteId;
    const selectedNote = notes.find((note: any) => {
        return note.id == noteId
    });

    if (!selectedNote) {
        return null;
    }

    return selectedNote;
}

const NoteDetailsPage: FC = () => {
    const note = useLoaderData();

    return (
        <main className="note-details">
            <h1>{note.title}</h1>
            <p className="note-details-content">{note.content}</p>
            <nav>
                <Link to='/notes'>Back to all Notes</Link>
            </nav>
        </main>
    );
};

export default NoteDetailsPage;