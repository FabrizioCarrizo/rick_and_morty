import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, randomChar, logout }) {
  return (
    <>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>

      <SearchBar onSearch={onSearch} randomChar={randomChar}></SearchBar>
      <Link to={"/About"}>
        <button>About</button>
      </Link>
      <button onClick={()=>logout()}>Log Out</button>
    </>
  );
}
