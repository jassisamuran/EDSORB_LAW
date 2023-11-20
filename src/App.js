import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MainData from "./components/MainData";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <MainData />
      <Footer />
    </div>
  );
}

export default App;
