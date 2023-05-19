export default class NotesAPI{
    static getAllNotes(){
            //returns note or [] if no note
            const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

            //sorts the notes in order 
            return notes.sort((a,b) => {
                return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
            } );
    }
    
    static saveNote(noteToSave){
        const notes = NotesAPI.getAllNotes();

        //seeing if the id matches the curent one 
        const existing = notes.find(note => note.id == noteToSave.id);


        if(existing){
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        }
        else{
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }
   
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));

    }

    
    static deleteNote(id){

    }


}