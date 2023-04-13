import { connect } from "react-redux";
import { removeFav } from "../redux/actions";
import Card from "./Card";

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps=(dispatch, ownProps)=>{
    return {
            removeFavorite: dispatch(removeFav(ownProps.id))
    }
}

const Favorites = ({ myFavorites, removeFavorite }) => {
  
  return (
    <div>
      {myFavorites.map((fav) => {
        
        return <Card key={fav.id} {...fav}></Card>;
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
