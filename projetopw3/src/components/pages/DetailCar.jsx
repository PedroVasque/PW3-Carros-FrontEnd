import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./DetailCar.module.css";
import Button from '../Button';
import tcross from "../../assets/carros/tcross.png";

const DetailCar = () => {
    // Recupera o código do carro
    const { cod_carro } = useParams();
    console.log('Código do carro: ' + cod_carro);

    // Cria o state para armazenar os dados do carro
    const [car, setCar] = useState({});
    const [error, setError] = useState(false);

    /* RECUPERANDO OS DADOS DO CARRO PARA A EXIBIÇÃO */
    useEffect(() => {
        // Verifica se o cod_car está definido antes de fazer a requisição
        if (cod_carro) {
            fetch(`http://localhost:5000/listagemCar/${cod_carro}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            })
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error('Erro ao buscar os dados do carro');
                    }
                    return resp.json()
                })
                .then((resp) => {
                    console.log('Dados do carro:', resp);
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                    setCar(resp.data);
                    console.log(resp.data)
                    console.log(car)
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        }
    }, [cod_carro]);

  
    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_carro_detail} src={tcross} alt="Imagem do carro" />
            </div>
            
            <div className={style.info}>
                <span className={style.carro}>Nome do carro: {car.nome_carro}</span>
                <span className={style.cor}>Cor: {car.cor_carro}</span>
                <span className={style.categoria}>Categoria: {car.cod_categoria}</span>
            </div>
                <div className={style.container_buttons}>
                    <Button label="EDITAR" router='/DetailCar/' cod_car={cod_carro} />
                    
                    <Button label='EXCLUIR' router='/DeleteCar/' cod_car={cod_carro} />
                </div>
            
        </div>
    );
};

export default DetailCar;
