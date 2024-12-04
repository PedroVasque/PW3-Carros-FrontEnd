import React, { useState, useEffect } from "react";
import style from "../pages/ListCar.module.css";
import CardCar from "../CardCar";
import Container from "../layout/Container";
import ContainerCar from "../layout/ContainerCar";
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
        ("Aqui");
        (data.data);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <Container>
      <section className={style.list_car_container}>
        <h1>Lista de Carros</h1>

        <ContainerCar>
          {cars.map((car) => (
            <CardCar
              cod_carro={car.cod_carro}
              nome_carro={car.nome_carro}
              cor_carro={car.cor_carro}
              imagem={tcross}
              key={car.cod_carro}
            />
          ))}
        </ContainerCar>
      </section>
    </Container>
  );
};

export default ListCar;
