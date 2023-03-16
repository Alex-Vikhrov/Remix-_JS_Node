import { Link } from "@remix-run/react";
import { FC } from "react";
import styles from './styles/NoteList.css';

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

const NoteList: FC<{ notes: Array<any> }> = ({ notes }) => {
    return (
        <ul className="note-list">
            {notes.map((note: any, index: number) => {
                return (
                    <li key={note.id} className='note'>
                        <Link to={note.id}>
                            <article>
                                <div>
                                    <ul className="note-meta">
                                        <li className="note__index">#{index + 1}</li>
                                        <li>
                                            <time dateTime={note.id}>
                                                {new Date(note.id).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </time>
                                        </li>
                                    </ul>
                                    <h2>{note.title}</h2>
                                </div>
                                <p>{note.content}</p>
                            </article>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export { NoteList };

// import { Link } from "@remix-run/react";
// import { FC, useState } from "react";
// import styles from './styles/NoteList.css';

// export function links() {
//     return [{ rel: 'stylesheet', href: styles }];
// }

// const NoteList: FC<{ notes: Array<any> }> = ({ notes }) => {
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [noteToDelete, setNoteToDelete] = useState('');

//     const handleDelete = async (noteId: string) => {
//         setNoteToDelete(noteId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteAction = async () => {
//         const formData = new FormData();
//         formData.set('action', 'delete');
//         formData.set('noteId', noteToDelete);
//         await fetch('/notes', {
//             method: 'POST',
//             body: formData
//         });
//         setShowDeleteConfirmation(false);
//     };

//     return (
//         <ul className="note-list">
//             {notes.map((note: any, index: number) => {
//                 return (
//                     <li key={note.id} className='note'>
//                         <article>
//                             <Link to={note.id}>
//                                 <div>
//                                     <ul className="note-meta">
//                                         <li className="note__index">#{index + 1}</li>
//                                         <li>
//                                             <time dateTime={note.id}>
//                                                 {new Date(note.id).toLocaleDateString('en-US', {
//                                                     day: 'numeric',
//                                                     month: 'short',
//                                                     year: 'numeric',
//                                                     hour: '2-digit',
//                                                     minute: '2-digit',
//                                                 })}
//                                             </time>
//                                         </li>
//                                     </ul>
//                                     <h2>{note.title}</h2>
//                                 </div>
//                                 <p>{note.content}</p>
//                             </Link>
//                             <button onClick={() => handleDelete(note.id)}>Delete Note</button>
//                         </article>
//                     </li>
//                 )
//             })}
//             {
//                 showDeleteConfirmation &&
//                 <div>
//                     <p>Are you sure you want to delete this note?</p>
//                     <button onClick={handleDeleteAction}>Yes</button>
//                     <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
//                 </div>
//             }
//         </ul>
//     );
// };

// export { NoteList };