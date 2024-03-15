import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./books/fantasy.json";
import horrorBooks from "./books/horror.json";
import CommentArea from "./components/CommentArea";
import scifiBooks from "./books/scifi.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <BookList books={scifiBooks} />

      <MyFooter />
    </div>
  );
}

export default App;
