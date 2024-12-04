import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteCar() {
    const { cod_carro } = useParams(); // Obtém o ID do carro da URL
    const navigate = useNavigate();  // Navegação programática

    useEffect(() => {
        fetch(`http://localhost:5000/excluirCarro/${cod_carro}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            if (!data.errorStatus) {
                navigate('/listCar', { state: 'Carro excluído com sucesso!' });
            } else {
                console.error("Erro ao excluir carro:", data.mensageStatus);
            }
        })
        .catch((err) => console.error("Erro na requisição:", err));
    }, [cod_carro, navigate]); // Dependências do useEffect

    return <div />;
}

export default DeleteCar;
