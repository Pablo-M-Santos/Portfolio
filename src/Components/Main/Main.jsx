import "./Main.css";
import fotoPerfil from "../../assets/ImagemHome.png";
import fotoQuemSou from "../../assets/ImagemQuemSou.jpg";
import locadoraWDA from "../../assets/locadoraWDA.png";
import transmartins from "../../assets/transmartins.png";
import ueceEnem from "../../assets/EnemUece.png";
import eletronic from "../../assets/EletronicArts.png";
import arduinoDay from "../../assets/arduinoDay.png";
import feprocic from "../../assets/feprocic.png";
import fabricaProgramadores from "../../assets/fabrica-de-programadores.png";
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
              href="https://drive.google.com/file/d/1fMDbZkyFR_6pUqsRGwMxNaXhsaBeeoKp/view?usp=sharing"
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
              <h3 className="sub-titulo">Ensino Superior</h3>
              <p>
                <strong>Graduação em Análise e Desenvolvimento de Sistemas</strong>
              </p>
              <p className="time">2025 - ATUALMENTE</p>
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
              <h3 className="nome">LOCADORA DE LIVROS</h3>
              <p className="detalhe">
                O Gerenciamento de Livros é um sistema desenvolvido para
                gerenciar e otimizar a administração de uma locadora de livros.
              </p>
              <div className="ferramentas">
                <div className="icons">
                  <div className="icon" title="GitLab">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=gitlab"
                      alt="GitLab"
                    />
                  </div>
                  <div className="icon" title="Figma">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=figma"
                      alt="Figma"
                    />
                  </div>
                  <div className="icon" title="Vue.js">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=vue"
                      alt="Vue.js"
                    />
                  </div>
                  <div className="icon" title="Spring">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=spring"
                      alt="Spring"
                    />
                  </div>
                  <div className="icon" title="Java">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=java"
                      alt="Java"
                    />
                  </div>
                  <div className="icon" title="Postman">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=postman"
                      alt="Postman"
                    />
                  </div>
                  <div className="icon" title="Docker">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=docker"
                      alt="Docker"
                    />
                  </div>
                </div>
              </div>
              <div className="links">
                <a href="https://locadora-api-wda.vercel.app/" className="site">
                  VER SITE
                </a>
                <a
                  href="https://github.com/Pablo-M-Santos/LocadoraAPI"
                  title="github"
                  className="github"
                >
                  <img
                    height={40}
                    width={50}
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Transmartins Vue */}
          <div className="projetos-content" id="right">
            <div className="projeto-texto" id="texto">
              <h3 className="nome">TRANSMARTINS</h3>
              <p className="detalhe">
                A Transmartins conta com uma frota moderna e diversificada, além
                de ser uma agência profissional de logística e cargas.
              </p>
              <div className="ferramentas">
                <div className="icons">
                  <div className="icon" title="HTML">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=html"
                      alt="HTML"
                    />
                  </div>
                  <div className="icon" title="CSS">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=css"
                      alt="CSS"
                    />
                  </div>
                  <div className="icon" title="JavaScript">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=javascript"
                      alt="JavaScript"
                    />
                  </div>
                  <div className="icon" title="Figma">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=figma"
                      alt="Figma"
                    />
                  </div>
                </div>
              </div>
              <div className="links">
                <a
                  href="https://pablo-m-santos.github.io/Transmartins/"
                  className="site"
                >
                  VER SITE
                </a>
                <a
                  href="https://github.com/Pablo-M-Santos/Transmartins"
                  title="github"
                  className="github"
                >
                  <img
                    height={40}
                    width={50}
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
            <img
              src={transmartins}
              alt="Pablo Santos"
              className="img-projeto"
            />
          </div>

          {/* UECE */}
          <div className="projetos-content">
            <img src={ueceEnem} alt="Pablo Santos" className="img-projeto" />
            <div className="projeto-texto">
              <h3 className="nome">UECE & ENEM</h3>
              <p className="detalhe">
                É um site feito especialmente para os alunos que poderão
                calcular de forma rápida e precisa a sua nota de corte na UECE
                ou do ENEM.
              </p>
              <div className="ferramentas">
                <div className="icons">
                  <div className="icon" title="HTML">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=html"
                      alt="HTML"
                    />
                  </div>
                  <div className="icon" title="CSS">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=css"
                      alt="CSS"
                    />
                  </div>
                  <div className="icon" title="JavaScript">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=javascript"
                      alt="JavaScript"
                    />
                  </div>
                  <div className="icon" title="Bootstrap">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="Bootstrap"
                    />
                  </div>
                </div>
              </div>
              <div className="links">
                <a
                  href="https://pablo-m-santos.github.io/UECE/"
                  className="site"
                >
                  VER SITE
                </a>
                <a
                  href="https://github.com/Pablo-M-Santos/UECE"
                  title="github"
                  className="github"
                >
                  <img
                    height={40}
                    width={50}
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Eletronic Arts */}
          <div className="projetos-content" id="right">
            <div className="projeto-texto" id="texto">
              <h3 className="nome">ELETRONIC ARTS GAMES</h3>
              <p className="detalhe">
                Site da Eletronic Arts, proporcionando uma experiência única aos
                amantes do universo dos jogos eletrônicos.
              </p>
              <div className="ferramentas">
                <div className="icons">
                  <div className="icon" title="HTML">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=html"
                      alt="HTML"
                    />
                  </div>
                  <div className="icon" title="CSS">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=css"
                      alt="CSS"
                    />
                  </div>
                  <div className="icon" title="JavaScript">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=javascript"
                      alt="JavaScript"
                    />
                  </div>
                  <div className="icon" title="Bootstrap">
                    <img
                      height={40}
                      width={50}
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="Bootstrap"
                    />
                  </div>
                </div>
              </div>
              <div className="links">
                <a href="https://eletronic-arts.netlify.app/" className="site">
                  VER SITE
                </a>
                <a
                  href="https://github.com/Pablo-M-Santos/Eletronic-Arts"
                  title="github"
                  className="github"
                >
                  <img
                    height={40}
                    width={50}
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                  />
                </a>
              </div>
            </div>
            <img src={eletronic} alt="Pablo Santos" className="img-projeto" />
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section className="eventos section" id="eventos">
        <div className="grid-layout">
          <h2 className="anima-certificado">Eventos</h2>
          <div className="evento-container">
            <article className="evento-card anima-certificado">
              <div className="imagem-container">
                <img src={arduinoDay} alt="ícone código" />
              </div>
              <h3>Desenvolvimento com Arduino</h3>
              <p>
                Criei sistemas destinados a eventos como o Arduino Day,
                incluindo um Seguidor de Linha e projetos para exposição.
              </p>
            </article>

            <article className="evento-card anima-certificado">
              <div className="imagem-container">
                <img src={feprocic} alt="ícone imagem" />
              </div>
              <h3>FEPROCIC</h3>
              <p>
                Participei do evento da Escola Luiza de Teodoro Viera na área de
                Informática, incluindo palestras e projetos de Front-End.
              </p>
            </article>

            <article className="evento-card anima-certificado">
              <div className="imagem-container">
                <img
                  className="fabrica"
                  src={fabricaProgramadores}
                  alt="ícone layers"
                />
              </div>
              <h3>Fábrica de Programadores</h3>
              <p>
                Participei do evento Programando com Games da Fábrica de
                Programadores, utilizando uma estrutura em blocos por meio da
                IDE AppInventor.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
