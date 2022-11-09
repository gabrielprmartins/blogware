import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="mainContainer">
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
