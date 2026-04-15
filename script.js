const cloudSkills = [
  { skill: 'AWS', level: 'Architecture & IaC' },
  { skill: 'Azure', level: 'Hybrid Integrations' },
  { skill: 'GCP', level: 'Data Platforms' },
  { skill: 'Terraform', level: 'Automated Provisioning' },
  { skill: 'Kubernetes', level: 'Container Orchestration' },
  { skill: 'Docker', level: 'Service Packaging' },
  { skill: 'CI/CD', level: 'Release Automation' },
  { skill: 'Monitoring', level: 'SRE + Observability' }
];

const cloudLane = document.getElementById('cloudLane');

function renderClouds() {
  if (!cloudLane) return;

  cloudSkills.forEach((item, index) => {
    const cloud = document.createElement('button');
    cloud.className = 'cloud-card';
    cloud.type = 'button';
    cloud.innerHTML = `
      <span class="cloud-title">${item.skill}</span>
      <span class="cloud-level">${item.level}</span>
    `;

    const topOffset = 8 + (index % 4) * 22;
    const duration = 20 + (index % 5) * 4;
    const delay = index * -3;

    cloud.style.top = `${topOffset}%`;
    cloud.style.animationDuration = `${duration}s`;
    cloud.style.animationDelay = `${delay}s`;

    cloud.addEventListener('click', () => {
      const isPaused = cloud.style.animationPlayState === 'paused';
      cloud.style.animationPlayState = isPaused ? 'running' : 'paused';
      cloud.setAttribute(
        'aria-label',
        `${item.skill} skill cloud ${isPaused ? 'resumed' : 'paused'}`
      );
    });

    cloudLane.appendChild(cloud);
  });
}

function setupReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

renderClouds();
setupReveal();
