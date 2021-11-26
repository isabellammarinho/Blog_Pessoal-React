import React from 'react';
import './Home.css';
/* Criando componente */

/* (tirando o div e utilizando somente as tags de abertura e fechamento) */
/* fragment" forma abreviada para o react retornar uma lista de elemntos; */

function Home(){
    return(
        <> 
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/uDVZ85G.jpeg" alt="Imagem Tela Inicial" className="img"/>
        </>
    );

}

export default Home; 