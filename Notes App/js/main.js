import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    id: 971839,
    title: "New Note has changed!",
    body: "I am a new note."
})

console.log(NotesAPI.getAllNotes())