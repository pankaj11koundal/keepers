import React, { useState } from "react";

function Input(props) {
    let [title, changeTitle] = useState("");

    return (
        <input
            name="title"
            onChange={(event) => {
                props.handleChange(event);
                changeTitle("");
                console.log(title);
            }}
            value={props.note.title}
            placeholder="Title"
        />
    );
}

export default Input;
