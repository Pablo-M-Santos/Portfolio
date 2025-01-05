import "./Main.css";
import fotoPerfil from "../../assets/ImagemHome.png";
import locadoraWDA from "../../assets/locadoraWDA.png";
import fotoQuemSou from "../../assets/ImagemQuemSou.jpg";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useEffect, useState } from "react";

const Main = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(
            `.navbar a[href="#${entry.target.id}"]`
          );
          if (entry.isIntersecting) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const [activeExperience, setActiveExperience] = useState("wda");
  const [sliderPosition, setSliderPosition] = useState(0);
  const experiences = {
    wda: {
      titulo: "Desenvolvedor Full-Stack",
      data: "Jul 2024 - ATUALMENTE",
      descricao:
        "Atualmente, estou estagiando como desenvolvedor full-stack na WDA Tecnologia & Inovação. Participei no desenvolvimento da aplicação de gerenciamento de livros, com consumo de API. Minha atuação incluiu o desenvolvimento de interfaces responsivas e a implementação de funcionalidades no back-end, focando na otimização de processos e na integração eficiente com a API para uma melhor experiência do usuário.",
      ferramentas: [
        "Notion",
        "GitLab",
        "Figma",
        "Vue",
        "Spring",
        "Java",
        "Postman",
        "Docker",
      ],
    },
    freelancer: {
      titulo: "Desenvolvedor Freelancer",
      data: "JAN. 2023 - NOV. 2024 ( 1 ano )",
      descricao:
        "Atuei como desenvolvedor freelancer, sendo responsável pela criação de pequenos sites e projetos, incluindo e-commerces e lojas online. Durante esse período, trabalhei no planejamento, desenvolvimento e lançamento de sites, garantindo que fossem funcionais e alinhados às necessidades dos clientes. Além disso, sempre busquei proporcionar uma experiência do usuário intuitiva e eficiente.",
      ferramentas: [
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "Gitlab",
        "Wordpress",
      ],
    },
    eeep: {
      titulo: "Desenvolvedor de Software",
      data: "Jan 2022 - Dez 2024 ( 3 ano )",
      descricao:
        "Durante minha trajetória na Escola Estadual de Ensino Profissionalizante Luiza de Teodoro Vieira, tive a oportunidade de aprender novas ferramentas e foi o meu ponto de partida na área de programação. Desenvolvi pequenos projetos pessoais tanto no front-end quanto no back-end, adquirindo conhecimentos em ambas as áreas e aplicando-os em soluções práticas para aprimorar minhas habilidades técnicas.",
      ferramentas: [
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "Vue",
        "Bootstrap",
        "Python",
        "PHP",
        "Java",
      ],
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
            <h1>
              Olá, eu sou
              <br />
              <div id="home-nome">Pablo Santos,</div>
            </h1>
            <h2>
              sou <span> desenvolvedor Full-Stack.</span>
            </h2>

            <div className="social-media">
              <a href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio">
                <FaWhatsapp />
              </a>
              <a href="https://github.com/Pablo-M-Santos">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pablo-m-santos/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:pablomoreirasantos.hp@gmail.com">
                <MdOutlineMail />
              </a>
            </div>
            <a
              className="btn"
              href="https://drive.google.com/file/d/1Mlr3oAObnPeRDAMPAMdWg2Dy3UydkZtX/view?usp=sharing"
              target="_blank"
            >
              Currículo
            </a>
          </div>
        </div>
      </section>

      {/* Quem sou */}
      <section className="quem-sou section" id="quem-sou">
        <div className="waveTop"></div>
        <div className="quem-sou-container">
          <img src={fotoQuemSou} alt="" className="quem-sou-img" />
          <div className="quem-sou-texto">
            <h2>Quem Sou</h2>
            <h3>Desenvolvedor Full - Stack</h3>
            <p>
              Sou desenvolvedor Full-Stack com 2 anos de experiência em
              desenvolvimento. Atualmente, estou cursando Análise e
              Desenvolvimento de Sistemas e estudando React e TypeScript. Estou
              em busca de uma oportunidade para aplicar minhas habilidades,
              crescer profissionalmente e desenvolver soluções inovadoras e
              eficientes.
            </p>
            <a
              className="btn"
              href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        {/* Experiencia */}
        <section className="experiencia">
          <h2 className="titulo-experiencia">Experiências</h2>
          <div className="container-experiencia">
            <ul className="experiencia-opcoes">
              <div
                className="barra-deslizante"
                style={{ top: `${sliderPosition * 72}px` }}
              ></div>
              {Object.keys(experiences).map((key, index) => (
                <li
                  key={key}
                  className={
                    activeExperience === key ? "active-experiencia" : ""
                  }
                  onClick={() => handleExperienceChange(key, index)}
                >
                  {key.toUpperCase()}
                </li>
              ))}
            </ul>
            <div className="detalhes">
              <div className="title-row">
                <h2 className="titulo-card">
                  {experiences[activeExperience].titulo}
                </h2>
                <span className="data">
                  {experiences[activeExperience].data}
                </span>
              </div>
              <p>{experiences[activeExperience].descricao}</p>
              <div className="ferramentas-experiencia">
                <h3 className="titulo-ferramenta">Ferramentas Utilizadas:</h3>
                <div className="icons">
                  {experiences[activeExperience].ferramentas.map(
                    (tool, index) => (
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
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Onda */}
      <section className="wave section">
        <div className="waveBottom"></div>
      </section>

      {/* Formação */}
      <section className="formacao section" id="formacao">
        <div className="formacao-container">
          <h2>Formação</h2>
          <div className="formacao-grid">
            <div className="formacao-tecnica">
              <h3 className="sub-titulo">Formação</h3>
              <p>
                <strong>Técnico em Informática</strong> - EEEP Luíza de Teodoro
                Vieira{" "}
              </p>
              <p className="time">2022 - 2024</p>
            </div>
            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>HTML</strong> - DIO
              </p>
              <p className="time">2022 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>CSS</strong> - DIO
              </p>
              <p className="time">2022 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>JavaScript</strong> - DIO
              </p>
              <p className="time">2022 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>Vue</strong>
              </p>
              <p className="time">2023 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>React</strong>
              </p>
              <p className="time">Estudando . . . </p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>TypeScript</strong>
              </p>
              <p className="time">Estudando . . . </p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>Java</strong>
              </p>
              <p className="time">2023 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>Spring Boot</strong>
              </p>
              <p className="time">2023 - 2024</p>
            </div>

            <div className="curso">
              <h3 className="sub-titulo">Curso</h3>
              <p>
                <strong>Docker</strong>
              </p>
              <p className="time">2023 - 2024</p>
            </div>
          </div>

          <div className="habilidades">
            <h3 className="formacao-titulo">Habilidades</h3>
            <div className="habilidades-grade">
              <div className="bloco ">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Figma</p>
              </div>

              <div className="bloco ">
                <p>Git</p>
                <p>Vue</p>
                <p>React (Aprendendo)</p>
                <p>TypeScript (Aprendendo)</p>
              </div>

              <div className="bloco">
                <p>Java</p>
                <p>Spring Boot</p>
                <p>Docker</p>
                <p>Postman</p>
              </div>

              <div className="bloco">
                <p>SQL</p>
                <p>PostgreSQL</p>
                <p>MySQL</p>
              </div>
            </div>
          </div>

          <div className="competencias">
            <h3 className="formacao-titulo">Competências</h3>
            <div className="competencias-grade">
              <div className="bloco">
                <p>Trabalho em Equipe</p>
                <p>Resolução de Problemas</p>
                <p>Criatividade</p>
                <p>Respeito</p>
              </div>

              <div className="bloco">
                <p>Capacidade de Adaptação</p>
                <p>Curiosidade</p>
                <p>Atenção Para Ouvir</p>
                <p>Agilidade de Aprendizado</p>
              </div>

              <div className="bloco">
                <p>Trabalho Sob Pressão</p>
                <p>Comunicação</p>
                <p>Princípios Éticos </p>
              </div>
            </div>
          </div>

          <div className="idiomas">
            <h3 className="formacao-titulo">Idiomas</h3>
            <div className="idiomas-grade">
              <div className="bloco">
                <p>Inglês / Básico (aprendendo)</p>
                <p>Espanhol / Básico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #1 - Locadora WDA */}
      {/* #2 - Transmartins Vue */}
      {/* #3 - UECE */}
      {/* #4 - Eletronic Arts */}
      {/* #5 - Transmartins  */}
      <section className="projetos section" id="projetos">
        <div className="projetos-container">
          <h2>Projetos</h2>
          {/* Locadora API */}
          <div className="projetos-content">
            <img src={locadoraWDA} alt="Pablo Santos" className="img-projeto" />
            <div className="projeto-texto">
              <h3 className="nome">LOCADORA WDA</h3>
              <p className="detalhe">
                Site baseado na empresa Atual Cargas uma transportadora que usa
                a logística no seu cotidiano.
              </p>
              <div className="ferramentas">
                <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
              </div>
              <div className="links"></div>
            </div>
          </div>
        </div>
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
