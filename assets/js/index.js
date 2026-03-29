const primarySkills = [
    {
        imgLink: "assets/img/java_icon.svg",
        alt: "Java icono",
        title: "Desarrollador Java",
        description: "POO, Lógica de servidor y escalabilidad"
    },
    {
        imgLink: "assets/img/postgresql_icon.svg",
        alt: "PostgreSQL icono",
        title: "Bases de datos",
        description: "PostgreSQL/MySQL, Modelamiento de datos, acceso a datos y rendimiento"
    },
    {
        imgLink: "assets/img/spring-boot-icon.svg",
        alt: "Spring Boot icono",
        title: "Spring Boot",
        description: "JPA, Spring Security, APIs REST y arquitecturas"
    },
]

const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
    primarySkills.forEach(skill => {
        skillsContainer.insertAdjacentHTML('beforeend', `
            <div class="col-6 col-sm-6 col-md-4 mb-4">
                <div class="card text-center skill-card h-100">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                        <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon" loading="lazy">
                        <h5 class="card-title mt-4 fw-bold">${skill.title}</h5>
                        <p class="text-secondary small mb-0">${skill.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
}


const secondarySkills = [
    {
        imgLink: "assets/img/html5_icon.svg",
        alt: "HTML 5 icono",
        title: "HTML 5",
        description: "HTML5, CSS y JavaScript"
    },
    {
        imgLink: "assets/img/docker-mark-ocean-blue.svg",
        alt: "Docker icono",
        title: "Docker",
        description: "Containerización y puesta en marcha"
    },
    {
        imgLink: "assets/img/agile_methodology-svgfind-com.svg",
        alt: "Metodologías ágiles icono",
        title: "Metodologías ágiles",
        description: "SCRUM, XP y Kanban, entre otras"
    },
    {
        imgLink: "assets/img/python-logo-only.svg",
        alt: "Python icono",
        title: "Python",
        description: "Solución de problemas, desarrollo rápido"
    },
    {
        imgLink: "assets/img/nextjs-13.svg",
        alt: "Next.js icono",
        title: "Next.js",
        description: "Aplicaciones Front-End con TypeScript"
    },
    {
        imgLink: "assets/img/icons8-bootstrap.svg",
        alt: "Bootstrap icono",
        title: "Bootstrap",
        description: "Estilo y diseño responsivo"
    },
]

const secondarySkillsContainer = document.getElementById("secondary-skills-container");

if (secondarySkillsContainer) {
    secondarySkills.forEach(skill => {
        secondarySkillsContainer.insertAdjacentHTML('beforeend', `
            <div class="col-6 col-sm-6 col-md-4 mb-4">
                <div class="card text-center skill-card h-100">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                        <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon ${skill.extraClass || ''}" loading="lazy">
                        <h5 class="card-title mt-4 fw-bold">${skill.title}</h5>
                        <p class="text-secondary small mb-0">${skill.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
}

// Navegación por puntos nativa
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    document.querySelectorAll("section[id]").forEach(section => {
        const sectionTop = section.offsetTop - (windowHeight * 0.45);
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            const activeId = section.getAttribute("id");
            document.querySelectorAll(".dot-nav-item").forEach(item => item.classList.remove("active"));
            const activeItem = document.querySelector(`.dot-nav-item[href="#${activeId}"]`);
            if (activeItem) activeItem.classList.add("active");
        }
    });
});


// PROYECTOS
const proyectos = [
    {
        title: "E-TravelGo",
        description: "Creación de una tienda digital con Spring Boot y bases de datos relacionales",
        image: "assets/img/projects/ecommerce/index.png",
        url: "projects/proyecto_bootcamp.html",
        badges: [
            { text: "Java 21", class: "bg-primary" },
            { text: "Spring Boot", class: "bg-success" },
            { text: "Thymeleaf", class: "bg-info text-dark" },
            { text: "MySQL", class: "bg-warning text-dark" }]
    },
    {
        title: "Proyecto de título",
        description: "GeoBasura: Geolocalización y Etiquetado de Residuos con Inteligencia Artificial",
        image: "assets/img/projects/ubb/mapa_calor.png",
        url: "projects/proyecto_ubb.html",
        badges: [
            { text: "Next.js", class: "bg-info text-dark" },
            { text: "PostgreSQL", class: "bg-primary" },
            { text: "Deep Learning", class: "bg-success" }
        ]
    },
];


// Inicialización de Tooltips
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});


const projectsContainer = document.getElementById("proyectos-container");

if (projectsContainer) {
    proyectos.forEach(proyecto => {
        let badgesHTML = '';
        if (proyecto.badges && Array.isArray(proyecto.badges)) {
            proyecto.badges.forEach(badge => {
                badgesHTML += `<span class="badge ${badge.class} me-1 mb-1">${badge.text}</span> `;
            });
        }

        projectsContainer.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="project-card" data-url="${proyecto.url}" data-title="${proyecto.title}">
                    <div class="project-img-container">
                        <img src="${proyecto.image}" class="project-img" alt="${proyecto.title}" loading="lazy">
                        <div class="project-overlay">
                            <span class="btn btn-outline-primary rounded-pill px-4">Ver Proyecto</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h5 class="fw-bold mb-2">${proyecto.title}</h5>
                        <p class="text-secondary small mb-0">${proyecto.description}</p>
                    </div>
                    <div class="px-4 py-2">
                        ${badgesHTML}
                    </div>
                </div>
            </div>
        `);
    });

    projectsContainer.addEventListener("click", (e) => {
        const card = e.target.closest(".project-card");
        if (!card) return;

        const url = card.getAttribute("data-url");
        const title = card.getAttribute("data-title");

        if (url === "#") return;

        document.getElementById("projectModalLabel").textContent = title;
        document.getElementById("projectIframe").setAttribute("src", url);
        document.getElementById("projectExternalLink").setAttribute("href", url);

        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    });
}

// Limpiar iframe al cerrar el modal
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('hidden.bs.modal', () => {
        document.getElementById("projectIframe").setAttribute("src", "");
    });
}