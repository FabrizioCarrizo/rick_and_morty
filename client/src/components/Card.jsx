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
    <div className="card container-main ">
      <div className="card-inner">
        <button
          onClick={() => {
            onClose(id);
            removeFavorite();
          }}
          className="cancel "
        >
          <img
            src="/icons/cancel.png
            "
            alt=""
            className="icon cancel"
          />
        </button>

        {isFav ? (
          <button
            className={"button-transparent icon "}
            onClick={() => handleFavorite()}
          >
            <img
              src="/icons/fav.png
            "
              alt=""
              className="icon"
            />
          </button>
        ) : (
          <button
            className={"button-transparent icon"}
            onClick={() => handleFavorite()}
          >
            <img src="/icons/no-fav.png" alt="" className="icon" />
          </button>
        )}
        <Link className="no-dec" to={`/detail/${id}`}>
          <h2 className={status==='Alive'|| status==='unknown'? 'name-alive': 'name-dead' }>{name}</h2>
        </Link>

        <div className="info__status animate__animated animate__zoomIn animate__faster animate__delay-2s">
          <h2>{status==='unknown' ? `Status ${status}` : status}</h2>
        </div>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin === "unknown" ? `Origin ${origin}` : origin}</h2>
      </div>
      <div className="image">
        <img className=" img__content " src={image} alt="" />
      </div>
    </div>
  );
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
