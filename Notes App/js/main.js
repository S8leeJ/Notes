import NotesView from "./NoteView.js"

const app = document.getElementById("app");
const view  = new NotesView(app, {
    onNoteAdd(){
        console.log("Add a new note!");
    },
    onNoteEdit(newTitle, newBody){
        console.log(newTitle);
        console.log(newBody);
    }   
});