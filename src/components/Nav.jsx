import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, randomChar }) {
  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>

      <SearchBar onSearch={onSearch} randomChar={randomChar}></SearchBar>
      <Link to={"/About"}>
        <button>About</button>
      </Link>
    </>
  );
}
