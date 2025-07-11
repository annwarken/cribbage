import React from 'react';
import '../assets/styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        <span className="crib">Crib</span>
        <span className="mates">Mates</span>
      </h1>
    </header>
  );
};

export default Header;
