import SearchBar from "./SearchBar";
import "../App.css";

import { Link } from "react-router-dom";

export default function Nav({ onSearch, randomChar, logout }) {
  return (
    <div className="Nav">
      <Link to={"/home"}>
        <button>Home</button>
      </Link>

      <SearchBar onSearch={onSearch} randomChar={randomChar}></SearchBar>
      <Link to={"/favorites"}>
        <button>Favorites</button>
      </Link>
      <Link to={"/About"}>
        <button>About</button>
      </Link>
      <Link>
        <button onClick={() => logout()}>Log Out</button>
      </Link>
    </div>
  );
}
