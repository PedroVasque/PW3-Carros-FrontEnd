import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./DetailCar.module.css";
import Button from '../Button';
import tcross from "../../assets/carros/tcross.png";

const DetailCar = () => {
    // Recupera o código do carro
    const { cod_car } = useParams();
    console.log('Código do carro: ' + cod_car);

    // Cria o state para armazenar os dados do carro
    const [car, setCar] = useState({});
    const [error, setError] = useState(false);

    /* RECUPERANDO OS DADOS DO CARRO PARA A EXIBIÇÃO */
    useEffect(() => {
        // Verifica se o cod_car está definido antes de fazer a requisição
        if (cod_car) {
            fetch(`http://localhost:5000/listagemCarro/${cod_car}`, {
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
                    return resp.json();
                })
                .then((data) => {
                    setCar(data.data);  // Atualiza o estado com os dados do carro
                    console.log('Dados do carro:', data.data);
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        }
    }, [cod_car]);

  
    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_carro_detail} src={tcross} alt="Imagem do carro" />
            </div>

            <div className={style.info}>
                {/* Exibindo os dados do carro */}
                <span className={style.nome_car}>Nome: {car.nome_carro}</span>
                <span className={style.cor_carro}>Cor: {car.cor_carro}</span>

                <div className={style.container_buttons}>
                    <Button label="EDITAR" />
                    <Button label="EXCLUIR" />
                </div>
            </div>
        </div>
    );
};

export default DetailCar;
