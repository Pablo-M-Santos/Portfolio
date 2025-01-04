import './Main.css';
import fotoPerfil from '../../assets/ImagemHome.png';
import fotoQuemSou from '../../assets/ImagemQuemSou.jpg';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useEffect, useState } from 'react';

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

  const [activeExperience, setActiveExperience] = useState('wda');
  const [sliderPosition, setSliderPosition] = useState(0);
  const experiences = {
    wda: {
      title: "Desenvolvedor Full-Stack",
      date: "Jul 2024 - Dez 2024 (6 meses)",
      description:
        "Estagiei como desenvolvedor full-stack na WDA Tecnologia & Inovação, onde criei uma aplicação web voltada para a gestão de uma locadora de livros.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    freelancer: {
      title: "Desenvolvedor Frontend",
      date: "Ago 2020 - Ago 2021 (1 ano)",
      description:
        "Atuei como freelancer desenvolvendo projetos de sites responsivos e interfaces dinâmicas para pequenas empresas.",
      tools: ["React", "Tailwind", "Next.js"],
    },
    estagio: {
      title: "Estagiário Full-Stack",
      date: "Jan 2019 - Dez 2019 (1 ano)",
      description:
        "Experiência inicial em desenvolvimento de software, trabalhando em APIs REST e integração de sistemas com tecnologias modernas.",
      tools: ["Node.js", "Express", "MongoDB"],
    },
  };

  const handleExperienceChange = (key, index) => {
    setActiveExperience(key);
    setSliderPosition(index);
  };



  return (
    // Home
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
            <a className="btn" href="https://drive.google.com/file/d/1Mlr3oAObnPeRDAMPAMdWg2Dy3UydkZtX/view?usp=sharing" target="_blank">Currículo</a>
          </div>
        </div>
      </section>

      {/* Quem sou */}
      <section className="quem-sou section" id="quem-sou">
        <div className="waveTop"></div>
        <div className="quem-sou-container">
          <img src={ fotoQuemSou } alt="" className="quem-sou-img" />
          <div className="quem-sou-texto">
          <h2>Quem Sou</h2>
            <h3>Desenvolvedor Full - Stack</h3>
            <p>Sou desenvolvedor Full-Stack com 2 anos de experiência em desenvolvimento. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e estudando React e TypeScript. Estou em busca de uma oportunidade para aplicar minhas habilidades, crescer profissionalmente e desenvolver soluções inovadoras e eficientes.</p>
            <a  className="btn" href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio">Saiba Mais</a>
          </div>
        </div>  

        {/* Experiencia */}
        <section className="experiencia">
        <h2 className="titulo-experiencia">Experiências</h2>
        <div className="container-experiencia">
          <ul className="experiencia-opcoes">
          <div className="barra-deslizante" style={{ top: `${sliderPosition * 72}px` }}  ></div>
            {Object.keys(experiences).map((key, index) => (
              <li
                key={key}
                className={activeExperience === key ? "active-experiencia" : ""}
                onClick={() => handleExperienceChange(key, index)}
              >
                {key.toUpperCase()}
              </li>
            ))}
          </ul>
          <div className="detalhes">
            <div className="title-row">
              <h2 className="titulo-card">{experiences[activeExperience].title}</h2>
              <span className="data">{experiences[activeExperience].date}</span>
            </div>
            <p>{experiences[activeExperience].description}</p>
            <div className="ferramentas-experiencia">
              <h3 className="titulo-ferramenta">Ferramentas Utilizadas:</h3>
              <div className="icons">
                {experiences[activeExperience].tools.map((tool, index) => (
                  <div className="icon" key={index} title={tool}>
                    <img
                      align="center"
                      title={tool}
                      alt={tool}
                      height="40"
                      width="50"
                      src={`https://skillicons.dev/icons?i=${tool.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
