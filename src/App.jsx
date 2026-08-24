import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"



const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 3.44,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 5.74,
    category: "Self-Help",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 4.59,
    category: "Finance",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 4.02,
    category: "Finance",
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    id: 5,
    title: "Ikigai",
    author: "Héctor García",
    price: 3.44,
    category: "Self-Help",
    image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 5.17,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 2.87,
    category: "Classic",
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
  },
  {
    id: 8,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 6.32,
    category: "Self-Help",
    image: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg"
  },
  {
    id: 9,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 3.44,
    category: "Motivation",
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 4.02,
    category: "Classic",
    image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
  }
];

function App() {
  return(
    <div>
      <Header/>
      <Home myData = {books}/>
      <Footer/>
    </div>
  )
}

export default App