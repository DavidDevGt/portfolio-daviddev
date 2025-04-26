/**
 * dom.js - DOM manipulation functions for the portfolio website
 * @module dom
 * @author DavidDevGt
 */

import { projects, certifications, skills } from './data.js';

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.innerHTML) el.innerHTML = options.innerHTML;
  if (options.textContent) el.textContent = options.textContent;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([k, v]) => el.setAttribute(k, v));
  }
  if (options.children) {
    options.children.forEach(child => child && el.appendChild(child));
  }
  return el;
}

function generateProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  projects.forEach(project => {
    // Imagen
    const img = createElement('img', {
      className: 'img-fluid rounded project-image',
      attrs: { src: project.image, alt: project.title }
    });
    const imageCol = createElement('div', {
      className: 'col-md-4 d-flex align-items-center justify-content-center',
      children: [img]
    });
    // Contenido
    const techBadges = project.technologies.map(tech =>
      createElement('span', { className: 'badge bg-primary me-1', textContent: tech })
    );
    const repoLinks = project.repos.map(repo =>
      createElement('a', {
        className: 'btn btn-sm btn-outline-light me-1',
        textContent: repo.text,
        attrs: { href: repo.url, target: '_blank', rel: 'noopener noreferrer' }
      })
    );
    const demoLink = project.demo
      ? createElement('a', {
          className: 'btn btn-sm btn-success',
          textContent: 'Demo',
          attrs: { href: project.demo, target: '_blank', rel: 'noopener noreferrer' }
        })
      : null;
    const contentCol = createElement('div', {
      className: 'col-md-8',
      children: [
        createElement('div', {
          className: 'card-body',
          children: [
            createElement('h5', { className: 'card-title', textContent: project.title }),
            createElement('p', { className: 'card-text', textContent: project.description }),
            createElement('div', { className: 'mb-2', children: techBadges }),
            createElement('div', {
              className: 'mb-2',
              children: [...repoLinks, demoLink].filter(Boolean)
            })
          ]
        })
      ]
    });
    // Card
    const row = createElement('div', {
      className: 'row g-0',
      children: project.layout === 'left' ? [imageCol, contentCol] : [contentCol, imageCol]
    });
    const cardInner = createElement('div', {
      className: 'card h-100',
      children: [row]
    });
    const card = createElement('div', {
      className: `col-lg-12 mb-5 project-card ${project.category}`,
      children: [cardInner]
    });
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

function generateCertifications() {
  const container = document.querySelector('#certifications .row:nth-child(2)');
  if (!container) return;
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  certifications.forEach(cert => {
    const link = createElement('a', {
      className: 'text-light certification-link stretched-link',
      attrs: { href: cert.url, target: '_blank', rel: 'noopener noreferrer' },
      innerHTML: `${cert.text} <i class="bi bi-box-arrow-up-right"></i>`
    });
    const certCard = createElement('div', {
      className: 'col-md-6 mb-4',
      children: [
        createElement('div', {
          className: 'card certification-card',
          children: [
            createElement('div', {
              className: 'card-body',
              children: [
                createElement('h6', { className: 'card-title', textContent: cert.title }),
                createElement('p', { className: 'card-text', children: [link] })
              ]
            })
          ]
        })
      ]
    });
    fragment.appendChild(certCard);
  });
  container.appendChild(fragment);
}

function generateSkills() {
  const container = document.querySelector('#skills .row:nth-child(2)');
  if (!container) return;
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  skills.forEach(skill => {
    const skillCard = createElement('div', {
      className: 'col-lg-3 col-md-4 col-sm-6 mb-4',
      children: [
        createElement('div', {
          className: 'skill-card text-center py-3',
          textContent: skill
        })
      ]
    });
    fragment.appendChild(skillCard);
  });
  container.appendChild(fragment);
}

export { generateProjects, generateCertifications, generateSkills };
