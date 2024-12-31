import './Main.css';
import fotoPerfil from '../../assets/foto-perfil-nova.png';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const link = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-container">
      <section className="home section" id="home">
        <div className="home-container">
          <img src={fotoPerfil} alt="Pablo Santos" className="home-img" />
          <div className="home-texto">
            <h1>Olá, eu sou<br/><strong id="home-nome">Pablo Santos,</strong></h1>
            <h2>sou <span> desenvolvedor Full-Stack.</span></h2>

            <div className="social-media">
              <a href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio"><FaWhatsapp /></a>
              <a href="https://github.com/Pablo-M-Santos"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/pablo-m-santos/"><FaLinkedinIn /></a>
              <a href="mailto:pablomoreirasantos.hp@gmail.com"><MdOutlineMail /></a>
            </div>
            <a className="btn" href="https://drive.google.com/file/d/1qj3IlZ9TbRHWs4KhQoSqtOfE2VHC3zUj/view?usp=sharing" target="_blank">Currículo</a>
          </div>
        </div>
      </section>







      
      <section className="section" id="quem-sou">
        Quem Sou
      </section>
      <section className="section" id="formacao">
        Formação
      </section>
      <section className="section" id="projetos">
        Projetos
      </section>
      <section className="section" id="eventos">
        Eventos
      </section>
      <section className="section" id="contato">
        Contato
      </section>
    </div>
  );
};

export default Main;
