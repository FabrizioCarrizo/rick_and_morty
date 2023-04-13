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

  const EMAIL = "fabriziocarrizo7@gmail.com";
  const PASSWORD = "henry36b";

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
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  const randomChar = () => {
    let random = Math.round(Math.random() * 826);
    if (findExisting(random) && random !== 0) return randomChar();
    else return onSearch(random);
  };

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else alert("Wrong email or password");
  };

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const handleFav = () => {
      console.log('Fav button pressed')
  };

  return (
    <Provider store={store}>
      <div className="App">
        {access ? (
          <Nav
            onSearch={onSearch}
            randomChar={randomChar}
            logout={logout}
          ></Nav>
        ) : null}

        <Routes>
          <Route path={"/"} element={<Form login={login}></Form>}></Route>
          <Route
            path="/home"
            element={
              <Cards
              className={'Cards'}
                characters={characters}
                onClose={onClose}
                handleFav={handleFav}
              ></Cards>
            }
          ></Route>

          <Route path="/about" element={<About></About>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

