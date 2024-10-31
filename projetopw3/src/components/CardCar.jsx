import style from "./CardCar.module.css"
import Button from "./forms/Button"

const CardCar = ({ cod_categoria, nome_carro, cor_carro, imagem})=>{
    
    return(
    <div className = {style.container}>
            <p className={style. nome_carro}>{ nome_carro}</p>
            <h3 className={style.cor_carro}>{cor_carro}</h3>
            <img className={style.imagem} src={imagem} alt={ cor_carro} title={{cor_carro}}/>
            <div>
                <Button label= 'Detalhes' router='/DetailCar/'/>
            </div>

        </div>
    )

}

export default CardCar

