import React from "react";
import BookCard from '../../components/BookCard'
import './style.css'

function Home() {
  return (
    <>
      <div className="heroBanner">
        <div className="heroContent">
            <div className="heroTitle">
            <h1 className="heroTitleTop">Jonny</h1>
            <h1 className="heroTitleBottom">Steinberg</h1>
            <p className="heroAuthor">Two-time winner of South Africa's premier non-fiction prize, the Sunday Times Alan Paton Award and an inaugural winner of the Donald Windham-Sandy M. Campbell Literature Prizes.</p>
            <a href="/books#book1" className="heroLink">Author of Winnie & Nelson: Portrait of a Marriage</a>
          </div>
            <div className="heroImage"></div>
            <p className="heroImageText"></p>
          </div>
      </div>
      <div className="container">
        <div className="latestReleases">
          <h2>Jonny's Latest Books</h2>
          <div className="cardContainer">
          <BookCard cardId="card2" bookId="book2" bookLink="/books#book2" />
          <div className="centerBook">
            <BookCard cardId="card1" bookId="book1" bookLink="/books#book1" />
            <a href="/books"><button className="booksLink">See More of Jonny's Books</button></a>
          </div>
          <BookCard cardId="card3" bookId="book3" bookLink="/books#book3" />
          </div>
        </div>
        <div className="interviewsDiv">
          <h2>Jonny's Recent Interviews</h2>
          <div className="interviewCard">
            <h3 className="interviewTitle">Radio Interview, The World</h3>
            <div className="interviewDetails">
              <p>"A new book explores a fraught political partnership"</p>
              <p>01 May 2023</p>
            </div>
            <a href="https://theworld.org/stories/2023-05-01/winnie-and-nelson-new-book-explores-fraught-political-partnership" target="_blank" rel="noreferrer"><button className="interviewLink">Listen Now</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;