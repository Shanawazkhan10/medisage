import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body/Body";
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
