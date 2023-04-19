import { useState } from "react";

export default function SearchBar({ onSearch, randomChar }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <input type="search" className="search-bar" placeholder="Search by character id..." onChange={(e) => handleChange(e)} value={id} />
      <button className="button"
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
      <button className="button" onClick={() => randomChar(onSearch)}>Sorprendeme!</button>
    </div>
  );
}
