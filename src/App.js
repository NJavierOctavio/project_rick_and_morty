
import { useState, useEffect } from 'react';
import './App.css';
import { Route,Routes, useLocation, useNavigate} from 'react-router-dom';
import Detail from './components/detail';
import About from './components/About';
import Cards from './components/Cards.jsx';
import NavBar from './components/navBar';
import axios from "axios";
import LoginForm from './components/Formulario';
import Favorites from './components/Favorites';



function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   const location = useLocation()
   const navigate = useNavigate();

const EMAIL = 'javi@gmail.com';
const PASSWORD = '1password';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

function searchHandler(id){

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }



function closeHandler(id){
   let deleted = characters.filter(character=> character.id !== Number(id))

   setCharacters(deleted);
}
 function randomHandler(){
   let haveIt = [];
   let random = (Math.random() * 826).toFixed();

   random = Number(random);

   if (!haveIt.includes(random));
   haveIt.push(random);
   fetch(`https://rickandmortyapi.com/api/character/${random}`)
   .then ((response) => response.json())
   .then((data)=>{
      if (data.name) {
         setCharacters((oldChars)=> [...oldChars, data]);
      } else {
         window.alert("No hay personajes con ese ID");
      }
   });
}


   return (
      <div className='App'>


      {location.pathname !== "/" && (<NavBar onSearch={searchHandler} random={randomHandler}/> )}
         

         <Routes>

            <Route path="/"element={<LoginForm login={login}/>}/>

            <Route 
            path="/home" 
            element={<Cards 
               onClose={closeHandler} characters={characters}/>}/>

               <Route path="/detail/:id" element ={<Detail/>}/>
               <Route path="/Favorites" element ={<Favorites/>}/>
               <Route path="/about" element={<About/>}/>
               
         </Routes>
         
        
      </div>
   );
   }
   

export default App;
