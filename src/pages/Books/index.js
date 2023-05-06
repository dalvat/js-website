import React from "react";
import BookDetails from "../../components/BookDetails";
import './style.css'

function Books() {
  return (
    <div className="container">
      <h2>Jonny's Books</h2>
      <ul className="bookList">
        <li>Winnie & Nelson: Portrait of a Marriage</li>
        <li>One Day in Bethlehem</li>
        <li>A Man of Good Hope</li>
        <li>Little Liberia</li>
        <li>Three-Letter Plague / Sizwes Test</li>
        <li>Thin Blue</li>
        <li>Notes from a Fractured Country </li>
        <li>The Number</li>
        <li>Midlands</li>
      </ul>
      <div className="booksDiv">
        <BookDetails />
      </div>
    </div>
  )
}

export default Books;