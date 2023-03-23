import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        console.log(data);
        if (data.name) setCharacter(data);
        else alert("There is no character with that id");
        setLoading(false);
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <>
          <h2> {id}</h2>
          <h2>{character.name ? character.name : "Unknown"}</h2>
          <h2>{character.species ? character.species : "Unknown"}</h2>
          <h2>{character.gender ? character.gender : "Unknown"}</h2>
          <h2>{character.origin ? character.origin.name : "Unknown"}</h2>
          <img src={character.image} alt="" />
        </>
      )}

      {/*       

    
     */}
    </>
  );
}
