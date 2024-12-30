import './Navbar.css';
import { FiMenu } from "react-icons/fi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Pablo Santos</a>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeNavbar}>Home</a>
        <a href="#quem-sou" onClick={closeNavbar}>Quem Sou</a>
        <a href="#formacao" onClick={closeNavbar}>Formação</a>
        <a href="#projetos" onClick={closeNavbar}>Projetos</a>
        <a href="#eventos" onClick={closeNavbar}>Eventos</a>
        <a href="#contato" onClick={closeNavbar}>Contato</a>
      </nav>
      <button className="hamburguer" onClick={toggleNavbar}>
        {isOpen ? <MdOutlineMenuOpen /> : <FiMenu />} 
      </button>
    </header>
  );
};

export default NavBar;

