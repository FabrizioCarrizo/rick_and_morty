import { connect } from "react-redux";
import { removeFav } from "../redux/actions";
import Card from "./Card";


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => dispatch(removeFav(id))
  }
}




const Favorites = ({ myFavorites , onClose}) => {
  return (
    <div>
      {myFavorites ? (
        myFavorites.map((fav, index) => {
          return (
            <Card
              key={index}
              onClose={onClose}
              {...fav}
              
            ></Card>
          );
        })
      ) : (
        <div>No favorites found</div>
      )}
    </div>
  );
};





export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


// Edit favorites pages and card detail on front