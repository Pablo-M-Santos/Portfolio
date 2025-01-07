import './Footer.css';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contato ">
      <div className="footer-container">
        <div className="footer-links">
          <div className="social-media" id="social-media-footer">
            <a
              href="https://wa.me/558592822527?text=Olá!,%20eu%20vim%20do%20seu%20Portfólio
            "
            > 
              <FaWhatsapp />
            </a>
            <a href="https://github.com/Pablo-M-Santos">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pablo-santos-25773025b/">
              <FaLinkedinIn />
            </a>
            <a href="mailto:pablomoreirasantos.hp@gmail.com">
              <MdOutlineMail />
            </a>
          </div>
        </div>
        <div className="footer-menus">
          <nav className="navbar-footer">
            <a href="#home">Home</a>
            <a href="#quem-sou">Quem sou</a>
            <a href="#formacao">Formação</a>
            <a href="#projetos">Projetos</a>
            <a href="#eventos">Eventos</a>
          </nav>
        </div>
        <div className="footer-direitos">
          <p>todos os direitos reservados a Pablo Santos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
