
const {getCharById}= require('../controllers/getCharById');
const {postFav, deleteFav, getFav}= require('../controllers/handleFavorites');
const {loginHandler}= require('../controllers/login');
const {Router}= require('express');


const router= Router();
router.get("/character/:id", getCharById);
router.get("/login", loginHandler);
router.post("/fav", postFav);
router.get("/fav", getFav);
router.delete("/fav/:id", deleteFav);




module.exports= router;






