import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
      
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
        <div className="detail-container">
          <div className="detail-content">
          {/* <h2> {id}</h2> */}
          <h2>Name: {character.name ? character.name : "Unknown"}</h2>
          <h3>Status: {character.status ? character.status : "Unknown"}</h3>
          <h3>Species: {character.species ? character.species : "Unknown"}</h3>
          <h3>Gender: {character.gender ? character.gender : "Unknown"}</h3>
          <h3>Origin: {character.origin ? character.origin.name : "Unknown"}</h3>
          <img src={character.image} alt="character" className="detail-image" />
          </div>
          
        </div>
      )}

      {/*       

    
     */}
    </>
  );
}
