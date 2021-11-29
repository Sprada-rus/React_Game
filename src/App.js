import React, {useState} from "react";
import './App.css';

function App() {
    document.addEventListener('keydown', () => {
        Jump()
    })

    // const dino = document.getElementById('dino')
    // const cactus = document.getElementById('cactus')

    setInterval(() => {
        let positionDino = document.getElementById('dino').getBoundingClientRect().top
        let positionCactus = document.getElementById('cactus').getBoundingClientRect().left

        console.log('Dino top = ', positionDino)
        console.log('Cactus top = ', positionCactus)

        if (positionCactus < 550 && positionDino > 395){
            alert("Game over")
        }
    }, 500)

    function Jump(){
        let dino = document.getElementById('dino')
        dino.classList.add('dino-jump')
        setTimeout(() => {
            console.log(dino.classList)
            dino.classList.remove('dino-jump')
        }, 500)

        console.log('OnClick')
    }



    return (
        <div className="App">
        <header className="App-header">
            <div className="game-body">
                <div id='dino' className='dino dino-run'/>
                <div id='cactus' onClick={Jump}/>
            </div>
        </header>
        </div>
    );
}

export default App;
