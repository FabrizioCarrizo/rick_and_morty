let myFavorites = [];

const postFav = (req, res) => {

  try{
    let newFav = req.body;
    let existFav=myFavorites.find((fav)=>{
      return fav.id=== newFav.id
    });
    if(existFav) {
      // myFavorites = myFavorites.filter(character => Number(newFav.id) !== character.id);
      res.status(200).json(myFavorites);


    }
    else {
      myFavorites.push(newFav);
      res.status(200).json(myFavorites);
    }
  
  
  } catch (error){
    res.status(500).send('Alredy in favorites!');

  }
 
};


const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter(character => Number(id) !== character.id);
  res.status(200).json(myFavorites);

};


const getFav=(req, res)=>{
  res.status(200).json(myFavorites);
  }
module.exports = {

  postFav,
  deleteFav,
  getFav
};
