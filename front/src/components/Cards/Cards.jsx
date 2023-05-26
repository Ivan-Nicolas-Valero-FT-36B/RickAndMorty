import {Card} from '../index';
import styles from "../../CSS/Cards.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

export default function Cards ({characters, onClose}) {
   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFavorites())
    }, [])
   return (
      <div className={styles.cards}>
         {characters.map(({id, name, species, gender, image}) => {
            return (
            <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
            );
         })}
      </div>
   );
};

