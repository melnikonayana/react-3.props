// import React from 'react';
import './App.css';
import LIstOffers from './listing/ListOffers/ListOffers';
import Stars from "./films/Stars";

function App() {
    return (
        <>
            {/* шапка */}
            <header className='header'>
                <h1>Домашнее задание «Props»</h1>
            </header>

            {/* Компонент задачи №1 */}
            <Stars count={0} />
            <Stars count={1} />
            <Stars count={2} />
            <Stars count={3} />
            <Stars count={4} />
            <Stars count={5} />
            <Stars count={6} />

            {/* Компонент задачи №2 */}
            <LIstOffers />

        </>
    );
}

export default App;
