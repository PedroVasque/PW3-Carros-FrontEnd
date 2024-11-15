import { Link } from 'react-router-dom'
import style from './Button.module.css'

const Button = ({label, router, cod_carro})=> {
    return(
        <div className={style.button_constainer}>
            <Link to={`${router}${cod_carro}`}>
                <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button
