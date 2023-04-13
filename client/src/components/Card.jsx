import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import "../App.css";


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFavorite: () => dispatch(addFav(ownProps)),
    removeFavorite: () => dispatch(removeFav(ownProps.id)),
  };
};

const mapStatetoProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

function Card({
  name,
  id,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  myFavorites,
  addFavorite,
  removeFavorite
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    
    if (isFav) {
      setIsFav(false);
      removeFavorite();
    } else {
      setIsFav(true);
      addFavorite();
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
   
  }, [myFavorites]);

  return (
    <div className="Card">
      <div className="CardInner">
      <button onClick={() => {onClose(id); setIsFav(false)}}>X</button>
      {isFav ? (
        <button onClick={() => handleFavorite()}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite()}>🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>

      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img className="CardImg" src={image} alt="" />
      </div>
     
    </div>
  );
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
