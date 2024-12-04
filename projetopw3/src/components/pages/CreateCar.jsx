
import React, { useState, useEffect } from "react";

import style from './CreateCar.module.css';

import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateCar = () => {
    /* DEFINE O STATE DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([]);

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE CARRO */
    const [car, setCar] = useState({});

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO CARRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeCar(event) {
        setCar({ ...car, [event.target.name]: event.target.value });
        (car);
    }

    function handlerChangeSelect(event) {
      setCar({ ...car, cod_categoria: event.target.value });
      (car);
  }

    /* RECUPERA OS DADOS DE CATEGORIAS DA APIREST */
    useEffect(() => {
      fetch('http://localhost:5000/listagemCategorias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        }
    })
    
        .then((resp) => resp.json())
        .then((data) => {
            ('DATA: ' + data.data[0].nome_categoria);
            setCategorias(data.data);
        })
        .catch((error) => {
            (error);
        });
    }, []);

    /* INSERÇÃO DOS DADOS DE CARRO */
    function createCar(car) {
        (JSON.stringify(car));

        fetch('http://localhost:5000/inserirCar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(car),
        })
        .then((resp) => resp.json())
        .then((data) => {
            (data);
            // navigate('/carros', { state: 'CARRO CADASTRADO COM SUCESSO!' });
        })
        .catch((err) => {
            (err);
        });
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createCar(car);
    }

    return (
        <section className={style.create_car_container}>
            <h1>CADASTRO DE CARROS</h1>

            <form onSubmit={submit}>
                <Input
                    type='text'
                    name='nome_carro'
                    placeholder='Digite o nome do seu carro aqui'
                    text='Nome do carro'
                    handleOnChange={handlerChangeCar}
                />

                <Input
                    type='text'
                    name='cor_carro'
                    placeholder='Digite a cor'
                    text='Cor'
                    handleOnChange={handlerChangeCar}
                />

                <Select
                    name='cod_categoria'
                    text='Escolha uma categoria de carro'
                    options={categorias}
                    handlerChangeSelect={handlerChangeSelect}
                />

                <Button
                    rotulo='Cadastrar Carro'
                />
            </form>
        </section>
    );
}

export default CreateCar;
