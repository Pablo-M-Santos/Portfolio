import './Main.css';
import fotoPerfil from '../../assets/ImagemHome.png';
import fotoQuemSou from '../../assets/ImagemQuemSou.jpg';
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
            <h1>Olá, eu sou<br/><div id="home-nome">Pablo Santos,</div></h1>
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

      <section className="quem-sou section" id="quem-sou">
        <div className="waveTop"></div>
        <div className="quem-sou-container  ">
          <img src={ fotoQuemSou } alt="" className="quem-sou-img" />
          <div className="quem-sou-texto">
          <h2>Quem Sou</h2>
            <h3>Desenvolvedor Front - End</h3>
            <p>Olá, meu nome é Pablo Moreira Santos. Atualmente, estou estudando e cursando o curso técnico em
              Informática. Estou em busca de oportunidades de emprego na área de programação Front-End, ansioso para
              demonstrar meus conhecimentos e sempre empenhado em aprender mais.</p>
            <a href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio">Saiba Mais</a>
          </div>
        </div>
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
