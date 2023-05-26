import React from "react";
import {SearchBar} from "../index";
import {Link, useLocation} from "react-router-dom"
import styles from "../../CSS/Nav.module.css"

const Nav = (props) => {
    const {pathname} = useLocation();
    return (
        <div className={styles.Nav}>
        <div className={styles.DivNav}>
            <Link to="/home"> <button className={styles.ButtonNav}>HOME</button> </Link>
            <Link to="/allcards"> <button className={styles.ButtonNav}>All Cards</button> </Link>
            <Link to="/favorites"> <button className={styles.ButtonNav}>FAVORITES</button> </Link>
            <Link to="/about"> <button className={styles.ButtonNav}>ABOUT</button> </Link>
            {pathname === "/home" && <SearchBar onSearch={props.onSearch}/>}
        </div>
        </div>
    )
}
export default Nav
