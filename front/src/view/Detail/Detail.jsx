import styles from "../../CSS/Detail.module.css"
import useCharacter from "../../hooks/useCharacter";


const Detail = () => {
    const character = useCharacter();
    
    return (
        <div >
        {character.name ? (
            <div className={styles.Detail}>
                <div className={styles.DivDatos}>
                    <h2>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                </div>
                <div className={styles.DivImg}>
                    <img className={styles.ImgAbout} src={character.image} alt="img"/>
                </div>
            </div>
        ) : (
            <h2>Loading...</h2>
        )}  
        </div>    
    )
}
export default Detail