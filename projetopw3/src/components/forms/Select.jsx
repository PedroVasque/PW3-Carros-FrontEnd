import React from 'react';

const Select = ({ name, text, options, handlerChangeSelect, value }) => {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <select name={name} onChange={handlerChangeSelect} value={value}>
                <option>Selecione uma categoria</option>

                {
                    options.map((option) => {
                        // console.log(option.cod_genero + ' - ' + option.nome_genero)   
                        return <option value={option.cod_categoria}>{option.nome_categoria}</option>                                      
                    })
                }
            </select>
        </div>
    );
};

export default Select;
