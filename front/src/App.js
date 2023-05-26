import React, { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { Cards, Nav, Form, About, Detail, Favorites, username, password, AllCards } from './components/index.js';
import './CSS/App.css';


function App() {
   const {pathname} = useLocation();
   const [characters , setCharacters ] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect (() => {
      !access && navigate("/")
   },[access]);

   function onSearch(id) {
      const urlBase = "http://localhost:3001";
      //const urlBase = "https://rickandmortyapi.com/api";
      fetch(`${urlBase}/onsearch/${id}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name && !characters.find((char) => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars,data]);
            }else if (characters.find((char) => char.id === data.id)) {
               window.alert("El personaje ya se agrego");
            }else {
               window.alert("No hay personaje con ese ID");
            }
         });
   }

  const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
  }
  const login = (userData) => {
      if (userData.username === username && userData.password === password){
         setAccess(true);
         navigate("/home");
      }else {
         alert("Usuario o contraseña incorrecto")
      }
   };
   
  return (
   <>
   {pathname !== "/" && <Nav onSearch={onSearch}/>}
   <Routes>
      <Route path='/' element={<Form login={login} />} />

      <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />

      <Route path='/allcards' element={<AllCards />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/about" element={<About />} />

      <Route path="/detail/:detailId" element={<Detail />} />
   </Routes>
   </>
);
}

export default App;