import style from "./CardCar.module.css"
import Button from "./forms/Button"

const CardCar = ({ cod_categoria, nome_carro, cor_carro})=>{
    
    return(
    <div className = {style.create_car_container}>
            <h3 className={style.cod_categoria}>{cod_categoria}</h3>
            <p className={style. nome_carro}>{ nome_carro}</p>
            {/* <img src={imagem} alt={ cor_carro} title={{cor_carro}}/> */}
            <div>
                <Button label= 'Detalhes' router='/DetailCar/'/>
            </div>

        </div>
    )

}

export default CardCar

