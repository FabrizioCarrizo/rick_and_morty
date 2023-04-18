import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";

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
  removeFavorite,
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
    console.log("my favorites--->", myFavorites);
    myFavorites.find(
      (fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      },
      [myFavorites]
    );
  }, [myFavorites]);

  return (
    <div className=" card container-main animate__animated animate__fadeInUp">
      <div className="">
        <button
          onClick={() => {
            onClose(id);
            removeFavorite();
          }}
        >
          X
        </button>
        {isFav ? (
          <button
            className="card-icon-favorite"
            onClick={() => handleFavorite()}
          >
            ❤️
          </button>
        ) : (
          <button
            className="card-icon-favorite"
            onClick={() => handleFavorite()}
          >
            🤍
          </button>
        )}
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <div className="info__status animate__animated animate__zoomIn animate__faster animate__delay-2s">
          <h2>{status}</h2>
        </div>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
      <div className="image">
        <img className=" img__content " src={image} alt="" />
      </div>
    </div>
  );
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
