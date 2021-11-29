import React, {useState} from "react";
import './App.css';

function App() {

    let dino = document.getElementById('dino')
    let cactus = document.getElementById('cactus')

    let isGameOver = () => {
        let positionDino = parseInt(window.getComputedStyle(dino).getPropertyValue("Top"))
        let positionCactus = parseInt(window.getComputedStyle(dino).getPropertyValue("Left"))

        if (positionCactus > 795 && positionDino < 30){
            alert("Game over")
        }
    }

    function Jump(){
        dino.className += ' dino-jump'
        setTimeout(() => {
            dino.classList.remove('dino-jump')
        }, 500)

        console.log('OnClick')
    }



    return (
        <div className="App">
        <header className="App-header">
            <div className="game-body">
                <div id='dino' className='dino dino-run' onClick={Jump}/>
                <div id='cactus' onClick={Jump}/>
            </div>
        </header>
        </div>
    );
}

export default App;
