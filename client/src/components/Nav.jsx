import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, randomChar, logout }) {
  return (
    <div className="nav">
      <div >
        <Link to={"/home"}>
          <button className="button">Home</button>
        </Link>
      </div>
      <div >
        <Link to={"/favorites"}>
          <button className="button">Favorites</button>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} randomChar={randomChar}></SearchBar>
      </div>
      
      <div >
        <Link>
          <button className="button logout-button" onClick={() => logout()}>Log Out</button>
        </Link>
      </div>
    </div>
  );
}
