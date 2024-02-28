import { Link } from "react-router-dom"
import {Home} from "../Home/Home"
import style from './Navbar.module.css'
import pokeLogo from '../../assets/pokeLogo.png'
export default function Navbar(){

    return(
        <div className={style.Navbar}>
            <img className={style.pokeLogo} src={pokeLogo} alt="logo pokemon" />
           <Link to ='/Home'> 
           <span>Home</span>
           </Link>
           <Link to ="/Search">
           <span>Pokedex</span>
           </Link>
           <Link to ="/Create">
           <span>Crea tu pokemon</span>
           </Link>
           <Link to ="/About">
           <span>About</span>
           </Link>
          
           
        </div>
    )
}