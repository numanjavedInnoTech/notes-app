import Note from "./Note";

const NotesList = ({notes, deleteNote}) => {
    let borderColor = 'red';
    const notesNotFound = <p className="text-center text-gray-500">No Notes Yet</p>
    const notesContainer = <div className="space-y-4">        
        {
            notes.map((note) => (
                <Note note={note} deleteNote={deleteNote} />
            ))
        }
    </div>
    if(notes.length === 0){
        return notesNotFound;
    }
    else{
        return notesContainer;
    }
}
 
export default NotesList;