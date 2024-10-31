import React, { useState, useEffect } from "react";
import style from "../pages/ListCar.module.css";
import CardCar from "../CardCar";
import Container from "../layout/Container";
import ContainerCar from "../layout/ContainerCar"
import tcross from "../../assets/carros/tcross.png"

const ListCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/listagemCar", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCars(data.data);
        console.log("Aqui")
        console.log(data.data)
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    };

    fetchCars();
  }, []);

  return (

    <section className={style.create_car_container}>
      <h1>Lista de Carros</h1>
      <div className={style.car_list_container}>
        {cars.map((car) => (
          <div key={car.cod_categoria} className={style.car_card}>
          <CardCar cod_categoria={car.cod_categoria} nome_carro={car.nome_carro} cor_carro={car.marca_carro} imagem={tcross}/>
            {/* <h2>{car.nome_carro}</h2>
            <p>Marca: {car.marca_carro}</p>
            <p>Ano: {car.ano_carro}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListCar;
