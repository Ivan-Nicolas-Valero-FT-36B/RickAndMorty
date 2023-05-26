import React from "react";
import face from "../../img/Facebook.png"
import insta from "../../img/Instagram.png"
import link from "../../img/Linkedin.png"
import git from "../../img/Github.png"
import Styles from'../../CSS/About.module.css'

const Abaut = () => {
    return (
        <div className={Styles.DivAbout}>
            <div className={Styles.DivAboutHijo}>
                <div className={Styles.marco}>
                    <h1 className={Styles.H1}>BIENVENIDOS</h1>
                    <h2 className={Styles.H2}>
                    Mi nombre es Ivan Valero, soy Analista en Sistemas y estoy en el curso
                    de Full-Stack de Henry.{<br/>}{<br/>}
                    Este es un proyecto integrador realizado con las tecnologias de
                    React y Redux para fomentar y afianzar las practicas de las mismas,
                    Espero que la aplicacion sea de su agrado y cualquier feedback es agradecido
                    </h2>
                    <a href="https://www.facebook.com/ivan.n.valero/" target="_blank"><img className={Styles.Img} src={face} alt="FACEBOOK" /></a>
                    <a href="https://www.instagram.com/ivannicolasvalero/" target="_blank"><img className={Styles.Img} src={insta} alt="INSTAGRAM" /></a>
                    <a href="https://www.linkedin.com/in/ivan-nicolas-valero-269a96211/" target="_blank"><img className={Styles.Img} src={link} alt="LINKEDIN" /></a>
                    <a href="https://github.com/Ivan-Nicolas-Valero-FT-36B" target="_blank"><img className={Styles.Img} src={git} alt="GITHUB" /></a>
                </div>
            </div>
        </div>    
    )
}
export default Abaut;