import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";

// const hello = "world";

const sum = (a, b) => {
  return a + b;
};

const result = sum(4, 6);

console.log(result);

const App = () => {
  const [isShowHomePage, setIsHomeShowPage] = useState(true);

  const handleSwitchPage = () => {
    setIsHomeShowPage((prev) => !prev);
  };

  // console.log(`hello : ${hello}`);

  return (
    <div className="app">
      <Header onSwitchPage={handleSwitchPage} />
      <div className="container">
        {isShowHomePage ? (
          <Home onSwitchPage={handleSwitchPage} />
        ) : (
          <MovieDetails />
        )}
      </div>
    </div>
  );
};

export default App;
