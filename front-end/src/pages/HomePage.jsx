import React from 'react';
import Header from '../Header';
import Names from '../Names'

const HomePage = () => {
    return (
        <div>
            <Header />
            <p>Esta es la página principal de la aplicación.</p>
            <Names />
        </div>
    );
};

export default HomePage;
