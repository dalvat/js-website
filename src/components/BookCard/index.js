import React from "react";
import "./style.css";

export default function BookCard( {cardId, bookId, bookLink} ) {
  return (
    <>
      <a href={bookLink} >
        <div className="bookCard" id={cardId}>
          <div className="cardImage" id={bookId}></div>
        </div>
      </a>
    </>
  )
}