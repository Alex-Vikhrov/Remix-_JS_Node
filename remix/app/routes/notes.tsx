import { ActionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FC } from "react";
import { NewNote, links as NewNoteStyles, NoteList, NoteListStyles } from "~/components";
import { getStoredNotes, storeNotes } from '~/data/notes';

export const links = () => {
    return [...NewNoteStyles(), ...NoteListStyles()];
};

export const loader = async () => {
    const notes = await getStoredNotes();
    return notes;
    // под капотом Remix делает следующее  return new Response(JSON.stringify(notes), {headers: {'Content-Type': 'application/json'}});
    // так же Remix предлагает нам уже встроенную функцию json которая берет наши необработанные данные json(notes) и возвращает нам нормальный обработанный jsonж
};

export const action = async ({ request, params }: ActionArgs) => {
    const fromData = await request.formData();
    const noteData: { [k: string]: any; } = Object.fromEntries(fromData); // || { title: fromData.get('title'), content: fromData.get('content'),}

    if (noteData.title.trim().length < 3) {
        return { message: 'Invalid title - must be at least 3 characters long.' }
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData); // объединяем новые заметки со старыми
    await storeNotes(updatedNotes);
    return redirect('/notes');
};

const Notes: FC = () => {
    const notes = useLoaderData();

    return (
        <div>
            <NewNote />
            {
                notes.length === 0 ?
                    <p className="info-message">Sorry is not notes!</p>
                    :
                    <NoteList notes={notes} />
            }
        </div>
    );
};

export default Notes;

// import { ActionArgs, redirect } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { FC } from "react";
// import { NewNote, links as NewNoteStyles, NoteList, NoteListStyles } from "~/components";
// import { getStoredNotes, storeNotes } from '~/data/notes';

// export const links = () => {
//     return [...NewNoteStyles(), ...NoteListStyles()];
// };

// export const loader = async () => {
//     const notes = await getStoredNotes();
//     return notes;
//     // под капотом Remix делает следующее  return new Response(JSON.stringify(notes), {headers: {'Content-Type': 'application/json'}});
//     // так же Remix предлагает нам уже встроенную функцию json которая берет наши необработанные данные json(notes) и возвращает нам нормальный обработанный jsonж
// };

// export const action = async ({ request, params }: ActionArgs) => {
//     const fromData = await request.formData();
//     const noteData: { [k: string]: any; } = Object.fromEntries(fromData); // || { title: fromData.get('title'), content: fromData.get('content'),}
//     const actionType = fromData.get('action');
//     const noteId = fromData.get('noteId');

//     if (actionType === 'delete' && noteId) {
//         const existingNotes = await getStoredNotes();
//         const updatedNotes = existingNotes.filter((note: { id: string }) => note.id !== noteId);
//         await storeNotes(updatedNotes);
//         return redirect('/notes');
//     }

//     if (noteData.title.trim().length < 3) {
//         return { message: 'Invalid title - must be at least 3 characters long.' }
//     }

//     const existingNotes = await getStoredNotes();
//     noteData.id = new Date().toISOString();
//     const updatedNotes = existingNotes.concat(noteData); // объединяем новые заметки со старыми
//     await storeNotes(updatedNotes);
//     return redirect('/notes');
// };

// const Notes: FC = () => {
//     const notes = useLoaderData();

//     return (
//         <div>
//             <NewNote />
//             {
//                 notes.length === 0 ?
//                     <p className="info-message">Sorry is not notes!</p>
//                     :
//                     <NoteList notes={notes} />
//             }
//         </div>
//     );
// };

// export default Notes;