import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from "./DetailCar.module.css";
import Button from '../Button';
import tcross from "../../assets/carros/tcross.png";

const DetailCar = () => {
    const { cod_carro } = useParams();
    console.log('Código do carro: ' + cod_carro);
    const navigate = useNavigate();

    const [car, setCar] = useState({});
    const [error, setError] = useState(false);
    const [categoria, setCategoria] = useState({});

    useEffect(() => {
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
                    if (!resp.ok) throw new Error('Erro ao buscar os dados do carro');
                    return resp.json();
                })
                .then((resp) => {
                    setCar(resp.data);
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        }
    }, [cod_carro]);

    useEffect(() => {
        if (car.cod_categoria) {
            fetch(`http://localhost:5000/listagemCategoria/${car.cod_categoria}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            })
                .then((resp) => resp.json())
                .then((resp) => {
                    console.log(resp);
                    setCategoria(resp.data);
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        }
    }, [car.cod_categoria]);

    function deleteCar() {
        fetch(`http://localhost:5000/excluirCarro/${cod_carro}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
        })
            .then((resp) => {
                if (!resp.ok) throw new Error('Erro ao excluir o carro');
                return resp.json();
            })
            .then(() => {
                navigate("/listCar");
            })
            .catch((err) => {
                console.error('Erro ao excluir o carro:', err);
            });
    }

    function updateCar() {
        navigate(`/updateCar/${cod_carro}`);
    }

    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_carro_detail} src={tcross} alt="Imagem do carro" />
            </div>
            <div className={style.info}>
                <span className={style.carro}>Nome do carro: {car.nome_carro}</span>
                <span className={style.cor}>Cor: {car.cor_carro}</span>
                <span className={style.categoria}>Categoria: {categoria?.nome_categoria || 'Carro sem categoria'}</span>
            </div>
            <div className={style.container_buttons}>
                <button onClick={updateCar}>Editar</button>
                <button onClick={deleteCar}>Excluir</button>
            </div>
        </div>
    );
};

export default DetailCar;
