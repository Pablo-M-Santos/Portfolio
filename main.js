// icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections and footer
let sections = document.querySelectorAll("section");
let footer = document.querySelector("footer");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      let targetLink = document.querySelector(
        'header nav a[href="#' + id + '"]'
      );
      if (targetLink) {
        targetLink.classList.add("active");
      }
    }
  });

  // Check if in footer and update navbar
  let footerTop = footer.offsetTop;
  let windowHeight = window.innerHeight;

  if (window.scrollY + windowHeight >= footerTop) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    let contactLink = document.querySelector('header nav a[href="#contato"]');
    if (contactLink) {
      contactLink.classList.add("active");
    }
  }

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove navbar click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

console.log("Sistema no ar...");

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(
  ".anima-home, .anima-quem-sou, .anima-formacao, .anima-form, .anima-formacao2, .anima-certificado, .anima-projeto-left, .anima-projeto-right"
);

elements.forEach((element) => myObserver.observe(element));

function showExperience(element, company) {
  // Atualizar classe ativa
  const items = document.querySelectorAll(".experiencia-opcoes li");
  items.forEach((item) => item.classList.remove("active-experiencia"));
  element.classList.add("active-experiencia");

  // Mover a barra deslizante
  const barra = document.querySelector(".barra-deslizante");
  barra.style.top = `${element.offsetTop}px`;

  // Atualizar detalhes
  const details = document.getElementById("experiencias-detalhes");
  switch (company) {
    case "wda":
      details.innerHTML = `
        <div class="title-row">
          <h2 class="titulo-card">Desenvolvedor Full-Stack</h2>
          <span class="data">Nov 2021 - Nov 2022 (1 ano)</span>
        </div>
        <p>
          Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar conteúdos para as aulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components.
        </p>
      `;
      break;
    case "freelancer":
      details.innerHTML = `
        <div class="title-row">
          <h2 class="titulo-card">Desenvolvedor Frontend</h2>
          <span class="data">Ago 2020 - Ago 2021 (1 ano)</span>
        </div>
        <p>
          Atuei como freelancer desenvolvendo projetos de sites responsivos e interfaces dinâmicas para pequenas empresas.
        </p>
      `;
      break;
    case "estagio":
      details.innerHTML = `
        <div class="title-row">
          <h2 class="titulo-card">Estagiário Full-Stack</h2>
          <span class="data">Jan 2019 - Dez 2019 (1 ano)</span>
        </div>
        <p>
          Experiência inicial em desenvolvimento de software, trabalhando em APIs REST e integração de sistemas com tecnologias modernas.
        </p>
      `;
      break;
  }
}
