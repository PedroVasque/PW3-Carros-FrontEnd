import React from 'react'

import style from './ContainerCar.module.css'

const ContainerCar = (props) => {
    return (
        <div className={style.container_car}>
            {props.children}
        </div>
    )
}

export default ContainerCar
