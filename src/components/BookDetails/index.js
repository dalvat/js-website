import React from "react";
import "./style.css";

export default function BookDetails( {detailsTitle, detailsP1, detailsP2, detailsP3, detailsP4, detailsP5, detailsID, isReleased, releaseDate1, publisherName1, publisherLink1, releaseDate2, publisherName2, publisherLink2, releaseDate3, publisherName3, publisherLink3, releaseDate4, publisherName4, publisherLink4, releaseDate5, publisherName5, publisherLink5, releaseDate6, publisherName6, publisherLink6, merchantName1, merchantLink1, merchantName2, merchantLink2} ) {
  if(isReleased === "true") {
    return (
      <div className="bookDetails" id={detailsID}>
        <div className="bookDetailsImage"></div>
        <div className="bookDetailsText">
          <h2>{detailsTitle}</h2>
          <p>{detailsP1}</p>
          <p>{detailsP2}</p>
          <details>
            <summary>Show more</summary>
          <p>{detailsP3}</p>
          <p>{detailsP4}</p>
          <p>{detailsP5}</p>
          </details>
        </div>
        <div className="bookDetailsRelease">
          <h2>Where to Buy</h2>
          <p><a href={merchantLink1}>{merchantName1}</a></p>
          <p><a href={merchantLink2}>{merchantName2}</a></p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="bookDetails" id={detailsID}>
        <div className="bookDetailsImage"></div>
        <div className="bookDetailsText">
          <h2>{detailsTitle}</h2>
          <p>{detailsP1}</p>
          <p>{detailsP2}</p>
          <details>
            <summary>Show more</summary>
          <p>{detailsP3}</p>
          <p>{detailsP4}</p>
          <p>{detailsP5}</p>
          </details>
        </div>
        <div className="bookDetailsLinks">
          <h2>Release Dates</h2>
          <p>{releaseDate1},<br/><a href={publisherLink1}>{publisherName1}</a></p>
          <p>{releaseDate2},<br/><a href={publisherLink2}>{publisherName2}</a></p>
          <p>{releaseDate3},<br/><a href={publisherLink3}>{publisherName3}</a></p>
          <p>{releaseDate4},<br/><a href={publisherLink4}>{publisherName4}</a></p>
          <h2>Where to Buy</h2>
          <p><a href={merchantLink1}>{merchantName1}</a></p>
          <p><a href={merchantLink2}>{merchantName2}</a></p>
        </div>
      </div>
    )
  }
}