import { useState } from "react";
import styles from "../../CSS/SearchBar.module.css"

 const SearchBar = (props) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={styles.DivSearch}>
         <input className={styles.Search} placeholder="ID CARD" type="text" onChange={handleChange}/>
         <button className={styles.ButtonSearch} onClick={() => props.onSearch(id)}  >Buscar</button>
      </div>
   )
 }

 export default SearchBar
