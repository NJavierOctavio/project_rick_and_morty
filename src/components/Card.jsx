import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import style from "./card.module.css";

 function Card(props) {
   const navigate = useNavigate()
   const {character, onClose, addFavorite, removeFavorite, favorites} = props;
   
   const [fav,setFav] = useState(false)


   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]);

   function navigateHandler(){
      navigate(`/detail/${character.id}`)
   }

   function handleFavorite(character){
      if(!fav){
         addFavorite(character)
         setFav(true)
      } else {
         removeFavorite(character)
         setFav(false)
      }
   }

   return (
      <div className={style.cardContainer}>
         <button className={style.buttonContainer} onClick={()=>{onClose(character.id)}}>X</button>
         <div>
         
         <img className={style.imagesContainer} 
         src={character.image}
         alt={character.name} 
         onClick={navigateHandler} />
         
         </div>
         
         <div className={style.infoContainer}>
         <h2>Name:{character.name}</h2>

         {
   fav ? (
      <button onClick={ ()=> handleFavorite(character.id)}>❤️</button>
   ) : (
      <button onClick={()=>handleFavorite(character)}>🤍</button>
   )
}
         <h2>Species: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>

         </div>
         
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {

   return {

      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   };
};
const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
