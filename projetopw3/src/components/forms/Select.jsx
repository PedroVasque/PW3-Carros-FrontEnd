import React from 'react';

const Select = ({ name, text, options, handlerChangeSelect }) => {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <select name={name} onChange={handlerChangeSelect}>
                {options.map((option) => (
                    <option key={option.cod_categoria} value={option.cod_categoria}>
                        {option.nome_categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
