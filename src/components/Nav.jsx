import SearchBar from "./SearchBar";

export default function Nav({ onSearch, randomChar }) {
  return (
    <>
    <SearchBar onSearch={onSearch} randomChar={randomChar}></SearchBar>

  </>
  )
 
}
