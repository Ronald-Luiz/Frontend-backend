import React from 'react';
import ReactTyped from 'react-typed';
import sateliteImg from '../img/satelite.png';

function Animacaotxt1() {
  const texto = "INTERNET CARIOCA: RÁPIDA, ACESSÍVEL E SEGURA:";
  return (
    <div className='containerAnimacaotxt1'>
      <h1>
        <ReactTyped
          strings={[texto]}
          typeSpeed={60}
        />
      </h1>
      <h2>
        Conexão disponível em toda cidade do Rio de Janeiro
      </h2>
      <ul>
        <li>Parceria entre Prefeitura, Starlink e InternetCarioca;</li>
        <li>Estrutura formada por satélite e antenas;</li>
        <li>Disponível em toda Cidade, no asfalto e favela;</li>
        <li>Gratuíta em locais públicos e para estudantes da rede pública;</li>
        <li>Planos exclusivos para instituições do terceiro setor;</li>
        <li>Planos para sua casa e empresa;</li>
        <li>Estrutura colaborativa. Cada receptor instalado, maior conexão para toda área;</li>
      </ul>
    </div>
  );
}

function ImgParaGrid() {
  return (
    <img className='imgSatelite' src={sateliteImg} alt="Satélite" />
  );
}

export { Animacaotxt1, ImgParaGrid };