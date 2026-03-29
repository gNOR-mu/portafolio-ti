const primarySkills = [
    {
        imgLink: "assets/img/java_icon.svg",
        alt: "Java icono",
        title: "Desarrollador Java",
        description: "POO, Lógica de servicor y escalabilidad"
    },
    {
        imgLink: "assets/img/postgresql_icon.svg",
        alt: "PostgreSQL icono",
        title: "Bases de datos",
        description: "Modelamiento de datos, acceso a datos y rendimiento"
    },
    {
        imgLink: "assets/img/spring-boot-icon.svg",
        alt: "Spring Boot icono",
        title: "Spring Boot",
        description: "JPA, Spring Security, APIs REST y arquitecturas"
    },
]

const primarySkillsContainer = $("#skills-container");


primarySkills.forEach(skill => {
    primarySkillsContainer.append(`
    <div class="col-6 col-sm-6 col-md-4 mb-4">
        <div class="card text-center skill-card h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon">
                <h5 class="card-title mt-4 fw-bold text-white">${skill.title}</h5>
                <p class="text-secondary small mb-0">${skill.description}</p>
            </div>
        </div>
    </div>
    `);
});


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
        description: "Aplicaciones Front-End con TypeScript",
        extraClass: "icon-nextjs"
    },
]

const secondarySkillsContainer = $("#secondary-skills-container");

secondarySkills.forEach(skill => {
    secondarySkillsContainer.append(`
    <div class="col-6 col-sm-6 col-md-4 mb-4">
        <div class="card text-center skill-card h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon ${skill.extraClass || ''}">
                <h5 class="card-title mt-4 fw-bold text-white">${skill.title}</h5>
                <p class="text-secondary small mb-0">${skill.description}</p>
            </div>
        </div>
    </div>
    `);
});