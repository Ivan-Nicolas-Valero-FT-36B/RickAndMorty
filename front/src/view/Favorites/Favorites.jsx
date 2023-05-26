import { useSelector } from "react-redux";
import {Card} from "../../components/index";
import styles from "../../CSS/Cards.module.css"


const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites) ;

    return (
        <div className={styles.cards}>
            {favorites.map(({id, name, species, gender, image}) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                );
            })}
        </div>
    );
};

export default Favorites;
