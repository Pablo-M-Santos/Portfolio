import './Main.css';
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
      <section className="section" id="home">
        Home
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
