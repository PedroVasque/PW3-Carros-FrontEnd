import React from "react";

import style from './Home.module.css'

const Home = ()=>{
    return(

        <section className={style.home_container}>
            <h1>Bem vindo ao seu Volkswagen!</h1>
            <h3>Seu web site de 4 rodas!</h3>
            <img src = "./volkswagen-acaba-carro.webp"/>
        </section>

    )

}

export default Home