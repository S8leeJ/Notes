export default class NotesView{
    //pass this through the first big div in panel
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}){
        this.root = root; 
        this.onNoteAdd = onNoteAdd
        this.onNoteEdit = onNoteEdit
        this.onNoteDelete = onNoteDelete
        this.onNoteSelect = onNoteSelect
        //the html for the div

        this.root.innerHTML = `
                <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__List"></div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note..">
                <textarea class="notes__body">Take note...</textarea>
            </div>
        `;
        //click listeners for the buttons
        const btnAddNote = this.root.querySelector(".notes__add");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");
        
        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", ()=> {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });
        console.log(this._createListItemHTML(300, "Hey", "Year hamte", new Date()));

        //todo: hide the note preview by default
    }

    _createListItemHTML(id, title, body, updated){
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-title">
                     ${body.substring(0, MAX_BODY_LENGTH)}
                     ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-title">
                    ${updated.toLocaleString(undefined, { dataStyle: "full", timeStyle: "short"})}
                </div>
            </div>
        `;
    }



    
}