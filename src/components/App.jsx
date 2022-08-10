import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  let [listItem, updateItems] = useState([]);

  function addItem(note) {
    updateItems(prevItems => {
      return listItem = [...prevItems, note];
    })
  }

  function deleteItem(id) {
    updateItems(listItem.filter((item, i) => {
      return i !== id;
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {listItem.map((item, i) => {
        return <Note
          title={item.title}
          content={item.content}
          key={i}
          id={i}
          deleteNote={deleteItem}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
