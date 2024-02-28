
import style from './landing.module.css'
import ashPoke from '../../assets/buttonLanding.png'
import { Navigate, useNavigate } from 'react-router-dom'


export default function LandingPage(){

const navigate = useNavigate()

    return(
        <div className={style.fondo}>
        <img className={style.pokebutton} src={ashPoke} alt="pokebola"  onClick={()=> navigate('/home')}/>
        </div>
    )
} 

