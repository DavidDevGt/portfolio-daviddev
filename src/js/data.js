const projects = [
  {
    title: "Money Tracker",
    description: "Es una aplicación web para llevar el control de tus gastos e ingresos de una forma sencilla y rápida.",
    image: "./src/img/money-tracker.png",
    category: "fullstack",
    repos: [
      { text: "Frontend", url: "https://github.com/DavidDevGt/vue-expense-tracker" },
      { text: "Backend", url: "https://github.com/DavidDevGt/backend-expense-tracker" }
    ],
    technologies: ["Vue", "PHP", "MySQL", "JWT"],
    layout: "left"
  },
  {
    title: "Min.URL",
    description: "Esta app te permite acortar tus URLs de una forma rápida y sencilla, con una interfaz limpia y amigable para todos los usuarios.",
    image: "./src/img/minurl.png",
    category: "fullstack",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/url-shortener" }
    ],
    technologies: ["Vue", "NodeJS", "Express", "Axios"],
    layout: "right"
  },
  {
    title: "Json Viewer & Editor",
    description: "Esta aplicación web te permite visualizar y editar tus JSON, además de otras funcionalidades como minimizar y formatear.",
    image: "./src/img/json-view-edit.png",
    category: "frontend",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/JSONviewer" }
    ],
    demo: "https://json-viewer-two.vercel.app/",
    technologies: ["HTML", "CSS", "Vue"],
    layout: "left"
  },
  {
    title: "Computer Vision con Transformers.js",
    description: "En esta app puedes subir cualquier imagen y la IA detectará los objetos que aparecen en ella, con una precisión del 90%. (Aprox.)",
    image: "./src/img/vision-transformers.png",
    category: "frontend",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/vanilla_transformers_js" }
    ],
    demo: "https://vanilla-transformers-js.vercel.app/",
    technologies: ["HTML", "CSS", "Javascript", "Transformers.js"],
    layout: "right"
  },
  {
    title: "AnimeFlix",
    description: "Esta aplicación web es un directorio de animes, puedes ver la información de cada anime, cantidad de episodios y la valoración de la comunidad.",
    image: "./src/img/animeflix.png",
    category: "frontend",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/anime_page_nextjs" }
    ],
    demo: "https://anime-page-nextjs.vercel.app/",
    technologies: ["Next.js", "React", "Framer Motion"],
    layout: "left"
  },
  {
    title: "Storage PDF",
    description: "Esta solución la desarrollé para una empresa que necesitaba almacenar los PDFs de sus clientes de una forma segura y registrando la información en una base de datos.",
    image: "./src/img/php_pdf.png",
    category: "backend",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/POO_CloudObjStrg" }
    ],
    technologies: ["Linux", "PHP", "MySQL", "MVC"],
    layout: "right"
  },
  {
    title: "Cuchubal App",
    description: "Esta aplicación funciona para llevar el control de los pagos y participantes de un cuchubal, una actividad que hace la comunidad para recaudar fondos. Muy común en Guatemala.",
    image: "./src/img/cuchubal-backend.png",
    category: "backend",
    repos: [
      { text: "Código", url: "https://github.com/DavidDevGt/cuchubal-app/tree/master/backend" }
    ],
    technologies: ["PHP", "MySQL", "API"],
    layout: "left"
  }
];

const certifications = [
  {
    title: "Administración de Servidores",
    url: "https://platzi.com/p/daviddevgt/ruta/8350-cloud-servidores/diploma/detalle/",
    text: "Certificado de aprobación de 'Administración de Servidores'."
  },
  {
    title: "Digital Ocean",
    url: "https://platzi.com/p/daviddevgt/curso/1653-digital-ocean/diploma/detalle/",
    text: "Certificado de aprobación de 'Digital Ocean'."
  },
  {
    title: "Inteligencia Artificial para Developers",
    url: "https://platzi.com/p/daviddevgt/curso/7964-ia-devs/diploma/detalle/",
    text: "Certificado de aprobación de 'Herramientas de Inteligencia Artificial para Developers'."
  },
  {
    title: "Programación Orientada a Objetos en PHP",
    url: "https://platzi.com/p/daviddevgt/curso/2034-php-poo/diploma/detalle/",
    text: "Certificado de aprobación de 'Programación Orientada a Objetos en PHP'."
  },
  {
    title: "Entornos de Desarrollo y Deployment en WordPress",
    url: "https://platzi.com/p/daviddevgt/curso/2602-desarrollo-wordpress/diploma/detalle/",
    text: "Certificado de aprobación de 'Entornos de Desarrollo y Deployment en WordPress'."
  },
  {
    title: "Fundamentos de IA para Data y Machine Learning",
    url: "https://platzi.com/p/daviddevgt/curso/6935-ia-data-ml/diploma/detalle/",
    text: "Certificado de aprobación de 'Fundamentos de IA para Data y Machine Learning'."
  }
];

const skills = [
  "Gitea", "Symfony", "HTML", "CSS", "PHP", "Javascript", 
  "Linux", "SQL", "Node.js", "AWS EC2 & S3", "DigitalOcean", "Cloudflare"
];

export { projects, certifications, skills };
