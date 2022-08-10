import React, { useState } from "react";

function CreateArea(props) {

    const [note, updateNote] = useState({
        title: "",
        content: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        props.addItem(note);
        updateNote({
            title: "",
            content: ""
        })
    }

    function handleChange(event) {
        let name = event.target.name;
        let text = event.target.value;

        updateNote((prevState => {
            return name === "title" ? { title: text, content: prevState.content } : { title: prevState.title, content: text }
        }))
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
