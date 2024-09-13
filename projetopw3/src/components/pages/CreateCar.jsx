import React from "react";
import style from "../pages/CreateCar.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button"

const CreateCar = () => {
  return (
    <section className={style.create_car_container}>
      <h1>CREATE CAR</h1>

      <Input
        type="text"
        name="txt_livro"
        placeHolder="Digite o nome do carro"
        text="Digite o carro"
      />

      <Input
        type="text"
        name="txt_livro"
        placeHolder="Digite a cor do seu veiculo"
        text="Digite a cor do seu veiculo"
      />

    

      <Select
        name="Modelos"
        text="Escolha o modelo do seu Volkswagen"
      />

      <Button
        rotulo="Selecionar modelo"
      />

    </section>
  );
};

export default CreateCar;