import { projects, certifications, skills } from './data.js';

function generateProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';
  projects.forEach(project => {
    const imageColumn = `
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded project-image" />
      </div>
    `;
    const contentColumn = `
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <div class="mb-2">
            ${project.technologies.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
          </div>
          <div class="mb-2">
            ${project.repos.map(repo => `<a href="${repo.url}" target="_blank" class="btn btn-sm btn-outline-light me-1">${repo.text}</a>`).join('')}
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-sm btn-success">Demo</a>` : ''}
          </div>
        </div>
      </div>
    `;
    const card = document.createElement('div');
    card.className = `col-lg-12 mb-5 project-card ${project.category}`;
    card.innerHTML = `
      <div class="card bg-dark text-white h-100">
        <div class="row g-0">
          ${project.layout === 'left' ? imageColumn + contentColumn : contentColumn + imageColumn}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function generateCertifications() {
  const container = document.querySelector('#certifications .row:nth-child(2)');
  if (!container) return;
  container.innerHTML = '';
  certifications.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'col-md-6 mb-4';
    certCard.innerHTML = `
      <div class="card certification-card bg-secondary text-white">
        <div class="card-body">
          <h6 class="card-title">${cert.title}</h6>
          <p class="card-text">
            <a href="${cert.url}" class="text-light certification-link stretched-link" target="_blank">
              ${cert.text} <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </p>
        </div>
      </div>
    `;
    container.appendChild(certCard);
  });
}

function generateSkills() {
  const container = document.querySelector('#skills .row:nth-child(2)');
  if (!container) return;
  container.innerHTML = '';
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
    skillCard.innerHTML = `
      <div class="skill-card bg-secondary text-white text-center py-3">
        ${skill}
      </div>
    `;
    container.appendChild(skillCard);
  });
}

export { generateProjects, generateCertifications, generateSkills };
