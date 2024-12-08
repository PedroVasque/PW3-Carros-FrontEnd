/* IMPORTAÇÃO DO STATE */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import style from './UpdateCar.module.css'
import Input from '../forms/Input'
import Select from '../forms/Select'
import Button from '../forms/Button'

const UpdateCars = () => {

        /* CRIAÇÃO DO STATE DOS DADOS DO CARRO */
        const [car, setCar] = useState({});

        /* RECUPERA O CÓDIGO DO CARRO ENVIADO PELO BOTÃO */
        const { cod_carro } = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categories, setCategories] = useState([]);

        /* FUNÇÃO DE CAPTURA DOS DADOS DE INPUT (NOME DO CARRO, MARCA, DESCRIÇÃO) */
        function handlerChangeCar(event) {
                setCar({ ...car, [event.target.name]: event.target.value });
                (car);
        }

        function handlerChangeSelect(event) {
                setCar({ ...car, cod_categoria: event.target.value });
                (car);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DE DADOS */
        useEffect(() => {
                fetch('http://localhost:5000/listagemCategorias', {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                }).then(
                        (resp) =>
                                resp.json()
                ).then(
                        (data) => {
                                setCategories(data.data);
                                // ('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error) => {
                                (error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO CARRO DO BACKEND */
        useEffect(() => {

                fetch(`http://localhost:5000/listagemCar/${cod_carro}`, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                })
                        .then((resp) => resp.json())
                        .then((data) => {
                                setCar(data.data);
                        })
                        .catch((err) => { (err) });

        }, []);

        /* ALTERAÇÃO DOS DADOS DO CARRO */
        function updateCar(car) {

                (JSON.stringify(car))

                fetch(`http://localhost:5000/alterarCar/${cod_carro}`, {
                        method: 'PUT',
                        mode: 'cors',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                        body: JSON.stringify(car)
                })
                        .then(
                                (resp) => resp.json()
                        )
                        .then(
                                (data) => {
                                        (data);
                                        navigate('/listCar', { state: 'CARRO ALTERADO COM SUCESSO!' });
                                }
                        )
                        .catch(
                                (err) => { (err) }
                        )
        }

        /* FUNÇÃO DE SUBMISSÃO */
        function submit(event) {
                event.preventDefault();
                updateCar(car);
        }

        return (
                <section className={style.create_car_container}>

                        <h1>ALTERAÇÃO DE CARROS</h1>

                        <form onSubmit={submit}>

                                <Input
                                        type='text'
                                        name='nome_carro'
                                        id='nome_carro'
                                        placeholder='Digite o nome do seu carro aqui'
                                        text='Nome do carro'
                                        handleOnChange={handlerChangeCar}
                                        value={car.nome_carro} />


                                <Input
                                        type='text'
                                        name='cor_carro'
                                        id='descricao_carro'
                                        placeholder='Digite a cor'
                                        text='Descrição'
                                        handleOnChange={handlerChangeCar}
                                        value={car.cor_carro} />

                                <Select
                                        name="cod_categoria"
                                        text="Escolha uma categoria de carro"
                                        options={categories}
                                        handlerChangeSelect={handlerChangeSelect}
                                        value={car.cod_categoria} />

                                <Button
                                        rotulo='Editar carro' />

                        </form>

                </section>
        )
}

export default UpdateCars
