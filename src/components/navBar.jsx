import style from  "./navBar.module.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar({onSearch, random}){
    return (
    <div className={style.navContainer}>

        <div>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favs</Link>
        </div>
    
        <SearchBar onSearch={onSearch}/>

        <button className={style.buttonContainer} onClick={random}>
            ADD RANDOM
        </button>
    </div>
    )
};