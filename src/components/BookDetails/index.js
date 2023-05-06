import React from "react";
import "./style.css";

export default function BookDetails() {
  return (
    <div className="bookDetails">
      <div className="bookDetailsImage"></div>
      <div className="bookDetailsText">
        <h2>Book Title</h2>
        <p>Text here...</p>
      </div>
    </div>
  )
}