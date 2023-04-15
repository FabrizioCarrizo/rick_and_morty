let myFavorites=[];

const postFav=(req,res)=>{
    myFavorites=[...myFavorites, req.body];
    res.json(myFavorites);
}

const deleteFav=(req,res)=>{
    myFavorites.filter((character)=>{
       myFavorites=[ ...myFavorites,character.id!==req.params.id];
    });
    res.json(myFavorites);
}

module.exports={
    postFav, deleteFav
}