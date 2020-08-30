import React from 'react';
import Mostrar from './Mostrar';
import Registar from './Registar';


const Centro = () => {

    const toggleModal = (modal) => {
        let currentState = modal.style.display;
        
        // If modal is visible, hide it. Else, display it.
        if (currentState === 'none') {
            modal.style.display = 'block';

            let close = modal.querySelector('.close_modal');
            close.addEventListener("click", function () {
                modal.style.display = 'none';
            });

            let overlay = modal.querySelector('.overlay');
            overlay.addEventListener("click", function () {
                modal.style.display = 'none';
            });

        } else {
            modal.style.display = 'none';

            let close = modal.querySelector('.close_modal');
            close.addEventListener("click", function () {
                modal.style.display = 'block';
            });

            let overlay = modal.querySelector('.overlay');
            overlay.addEventListener("click", function () {
                modal.style.display = 'block';
            });
        }
    }

    const callModal1 = () => {
        let modal = document.querySelector('#modal1');
        toggleModal(modal);
    }

    const callModal2 = () => {
        let modal = document.querySelector('#modal2');
        toggleModal(modal);
    }

    return (
        <div>
            <div id="centerDiv">
                <img id="logo" alt={'logo'} src={require('../assets/images/logo-slider.jpg')}/>
                <h2 style={{ textAlign: "center" }}>Factos Verídicos</h2>
                <button id="showModalBtn" className="btn-show" onClick={() => { callModal1() }}>Mostrar</button>
                <button id="addModalBtn" className="btn-show" onClick={() => { callModal2() }}>Adicionar</button>
            </div>

            <Mostrar />
            <Registar />
        </div>
    );
}

export default Centro;
