import React from 'react';
import '../styles/global.css';
import '../styles/homePage.css'
// import react-router-dom from 'react-router-dom';

function HomePage(){
    return(

        <div className="App">
        <a href="/createQuestion" className="btn-default">Criar meu quiz</a>
      </div>
      
    )
}

export default HomePage;
