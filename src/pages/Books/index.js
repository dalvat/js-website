import React from "react";
import BookDetails from "../../components/BookDetails";
import './style.css'

function Books() {
  return (
    <div className="container">
      <h2>Jonny's Books</h2>
      <ul className="bookList">
        <li>
          <a href="#about-book-1">Winnie & Nelson: Portrait of a Marriage</a>
        </li>
        <li>
          <a href="#about-book-2">One Day in Bethlehem</a>
        </li>
        <li>
          <a href="#about-book-3">A Man of Good Hope</a>
        </li>
        <li>
          <a href="#about-book-4">Little Liberia</a>
        </li>
        <li>
          <a href="#about-book-5">Three-Letter Plague / Sizwes Test</a>
        </li>
      </ul>
      <ul className="bookList">
        <li>
        <a href="#about-book-6">Thin Blue</a>
        </li>
        <li>
        <a href="#about-book-7">Notes from a Fractured Country</a>
        </li>
        <li>
        <a href="#about-book-8">The Number</a>
        </li>
        <li>
        <a href="#about-book-9">Midlands</a>
        </li>
      </ul>
      <div className="booksDiv">
        <BookDetails
          detailsID="about-book-1"
          detailsTitle="About Winnie & Nelson: Portrait of a Marriage"
          detailsP1="From one of South Africa’s foremost nonfiction writers, a deeply researched, shattering new account of Nelson Mandela’s relationship with Winnie Madikizela-Mandela. Drawing on never-before-seen material, Steinberg reveals the fractures and stubborn bonds at the heart of a volatile and groundbreaking union, a very modern political marriage that played out on the world stage."
          detailsP2="One of the most celebrated political leaders of a century, Nelson Mandela has been written about by many biographers and historians. But in one crucial area, his life remains largely untold: his marriage to Winnie Madikizela-Mandela. During his years in prison, Nelson grew ever more in love with an idealized version of his wife, courting her in his letters as if they were young lovers frozen in time. But Winnie, every bit his political equal, found herself increasingly estranged from her jailed husband’s politics. Behind his back, she was trying to orchestrate an armed seizure of power, a path he feared would lead to an endless civil war."
          detailsP3="Jonny Steinberg tells the tale of this unique marriage—its longings, its obsessions, its deceits—making South African history a page-turning political biography. Winnie and Nelson is a modern epic in which trauma doesn’t affect just the couple at its center, but an entire nation. It is also a Shakespearean drama in which bonds of love and commitment mingle with timeless questions of revolution, such as whether to seek retribution or a negotiated peace. Steinberg reveals, with power and tender emotional insight, how far these forever-entwined leaders would go for each other and where they drew the line. For in the end, both knew theirs was not simply a marriage, but a contest to decide how apartheid should be fought."
          detailsP4="One of the most celebrated political leaders of a century, Nelson Mandela has been written about by many biographers and historians. But in one crucial area, his life remains largely untold: his marriage to Winnie Madikizela-Mandela. During his years in prison, Nelson grew ever more in love with an idealized version of his wife, courting her in his letters as if they were young lovers frozen in time. But Winnie, every bit his political equal, found herself increasingly estranged from her jailed husband’s politics. Behind his back, she was trying to orchestrate an armed seizure of power, a path he feared would lead to an endless civil war."
          detailsP5="Jonny Steinberg tells the tale of this unique marriage—its longings, its obsessions, its deceits—making South African history a page-turning political biography. Winnie and Nelson is a modern epic in which trauma doesn’t affect just the couple at its center, but an entire nation. It is also a Shakespearean drama in which bonds of love and commitment mingle with timeless questions of revolution, such as whether to seek retribution or a negotiated peace. Steinberg reveals, with power and tender emotional insight, how far these forever-entwined leaders would go for each other and where they drew the line. For in the end, both knew theirs was not simply a marriage, but a contest to decide how apartheid should be fought.Jonny Steinberg tells the tale of this unique marriage—its longings, its obsessions, its deceits—making South African history a page-turning political biography. Winnie and Nelson is a modern epic in which trauma doesn’t affect just the couple at its center, but an entire nation. It is also a Shakespearean drama in which bonds of love and commitment mingle with timeless questions of revolution, such as whether to seek retribution or a negotiated peace. Steinberg reveals, with power and tender emotional insight, how far these forever-entwined leaders would go for each other and where they drew the line. For in the end, both knew theirs was not simply a marriage, but a contest to decide how apartheid should be fought."
          isReleased="false"
          releaseDate1="2 May 2023"
          publisherName1="Penguin Random House"
          publisherLink1="https://www.penguinrandomhouse.com/books/608845/winnie-and-nelson-by-jonny-steinberg/"
          releaseDate2="11 May 2023"
          publisherName2="William Collins – HarperCollins Publishers "
          publisherLink2="https://www.williamcollinsbooks.co.uk/products/winnie-nelson-portrait-of-a-marriage-jonny-steinberg-9780008353780/"
          releaseDate3="17 May 2023"
          publisherName3="Jonathan Ball Publishers "
          publisherLink3="https://www.jonathanball.co.za/component/virtuemart/winnie-and-nelson?Itemid=491"
          releaseDate4="Late May 2023"
          publisherName4="Uitgeverij Atlas Contact"
          publisherLink4="https://www.atlascontact.nl/boek/winnie-nelson/"
          merchantName1="Amazon"
          merchantLink1="https://www.amazon.com/Winnie-Nelson-Portrait-Jonny-Steinberg/dp/0525656855/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="
          merchantName2="Audible"
          merchantLink2="https://www.amazon.com/Audible-Winnie-Nelson-Portrait-Marriage/dp/B0BVWL8X2W/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr="
        />
        <BookDetails
          detailsID="about-book-2"
          detailsTitle="About One Day in Bethlehem"
          detailsP1="Paragraph One."
          detailsP2="Paragraph Two."
          detailsP3="Paragraph Three."
          detailsP4="Paragraph Four."
          detailsP5="Paragraph Five."
          isReleased="true"
          merchantName1="Amazon"
          merchantLink1="https://www.amazon.com/stores/Jonny-Steinberg/author/B001HPYVVG"
          />
        <BookDetails
          detailsID="about-book-3"
          detailsTitle="About A Man of Good Hope"
          detailsP1="Paragraph One."
          detailsP2="Paragraph Two."
          detailsP3="Paragraph Three."
          detailsP4="Paragraph Four."
          detailsP5="Paragraph Five."
          isReleased="true"
          merchantName1="Amazon"
          merchantLink1="https://www.amazon.com/stores/Jonny-Steinberg/author/B001HPYVVG"
          merchantName2="Audible"
          merchantLink2="https://www.amazon.com/A-Man-of-Good-Hope-audiobook/dp/B07Z6KYTPT/"
        />
      </div>
    </div>
  )
}

export default Books;