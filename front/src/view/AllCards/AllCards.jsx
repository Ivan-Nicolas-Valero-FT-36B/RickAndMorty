import {Card} from '../../components/index';
import styles from "../../CSS/Cards.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../../redux/actions"


export default function AllCards() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUsers());
    }, []);
    return (
        <div>
        <div className={styles.cards}>
            {users.results?.map(({ id, name, species, gender, image }) => (
            <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
            />
            ))}
        </div>
        <button className={styles.ButtonPag}>PREV PAG</button>
        <button className={styles.ButtonPag}>NEXT PAG</button>
        </div>
    );
  };




