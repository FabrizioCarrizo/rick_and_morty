import { useState } from "react";

export default function SearchBar({ onSearch, randomChar }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <input type="search" onChange={(e) => handleChange(e)} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
      <button onClick={() => randomChar(onSearch)}>Sorprendeme!</button>
    </div>
  );
}
