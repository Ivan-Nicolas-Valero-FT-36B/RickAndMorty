import styles from "../../CSS/Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites} from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";


function Card({id, name, species, gender, image, onClose, myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const addFavorite = (character) => {
      axios.post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("ok"));
   };

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(getFavorites());
      alert("Eliminado con exito");
   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id, name, species, gender, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const {pathname} = useLocation();
   return (
      <div className={styles.card}>
         <div className={styles.DivCard1}>
            {
               isFav ? (
                  <button className={styles.ButtonCardFav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.ButtonCardFav} onClick={handleFavorite}>🤍</button>
               )
            }
            {pathname === "/home" && <button className={styles.ButtonCard} onClick={() => onClose(id)}>❌</button>}
            <Link className={styles.LinkName} to={`/detail/${id}`}>
               <h2 className={styles.h2Card}>{name}</h2><br/>
            </Link>
            <img className={styles.imgCard} src={image} alt='' />
         </div>
         <div className={styles.marco}>
            <h2 className={styles.h2Card}>Species: {species}</h2><br/>
            <h2 className={styles.h2Card}>Gender: {gender}</h2><br/>
         </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return{
      // addFavorite: (character)=>{
      //    dispatch(addFavorite(character));
      // },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);