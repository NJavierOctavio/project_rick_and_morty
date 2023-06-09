
import { useState } from "react";
import style from "./searchBar.module.css"
export default function SearchBar(props) {
   const {onSearch} = props;

const [id,setId] = useState("")

function changeHandler(e){
   e.preventDefault();
   let input = e.target.value

   setId(input)
}



   return (
      <div className={style.barContainer}>
         <input className={style.inputContainer}type="search" value={id} onChange={changeHandler} />
         <button className={style.buttonContainer}onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
