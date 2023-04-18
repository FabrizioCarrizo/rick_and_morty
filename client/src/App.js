import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const findExisting = (id) => {
    if (characters.find((character) => character.id === parseInt(id)))
      return true;
  };

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    if (characters) {
      setCharacters(
        characters.filter((character) => {
          return character.id !== Number(id);
        })
      );
    }
  };

  const randomChar = () => {
    let random = Math.round(Math.random() * 826);
    if (findExisting(random) && random !== 0) return randomChar();
    else return onSearch(random);
  };

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      });
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const handleFav = () => {
    console.log("Fav button pressed");
  };

  return (
    <Provider store={store}>
      <div className="app">
        {access ? (
          <Nav
            onSearch={onSearch}
            randomChar={randomChar}
            logout={logout}
          ></Nav>
        ) : null}
        <div className="cards">
          <Routes>
            <Route path={"/"} element={<Form login={login}></Form>}></Route>
            <Route
              path="/home"
              element={
                <Cards
                  className={"cards"}
                  characters={characters}
                  onClose={onClose}
                  handleFav={handleFav}
                ></Cards>
              }
            ></Route>

            <Route path="/about" element={<About></About>}></Route>
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            <Route
              path="/favorites"
              element={<Favorites onClose={onClose}></Favorites>}
            ></Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
