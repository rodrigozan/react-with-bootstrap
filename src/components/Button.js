import React from 'react';

import '../css/meu-bootstrap.css';

function Button() {
    return (
        <div className="container">
            <h1>React Bootstrap</h1>
            <p className="minha-classe">Este parágrafo tem o estilo da <strong>classe minha classe</strong></p>
            <button className="btn btn-primary">Clique em Mim</button>
        </div>
    );
}

export default Button;