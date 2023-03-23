import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  const [characters, setCharacters] = useState([]);

  const findExisting = (id) => {
    if (characters.find((character) => character.id === parseInt(id)))
      return true;
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name && !findExisting(id)) {
          setCharacters([...characters, data]);
        } else if (findExisting(id)) {
          return window.alert("The character is already being displayed!");
        }
      })
      .catch(({ response }) => window.alert(response.data.error));
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  const randomChar = () => {
    let random = Math.round(Math.random() * 826);
    if (findExisting(random) && random !== 0) return randomChar();
    else return onSearch(random);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} randomChar={randomChar}></Nav>
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose}></Cards>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/detail/:id"
          element={<Detail></Detail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
