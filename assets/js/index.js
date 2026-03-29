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
        description: "Modelamiento de datos, acceso a datos y rendimiento"
    },
    {
        imgLink: "assets/img/spring-boot-icon.svg",
        alt: "Spring Boot icono",
        title: "Spring Boot",
        description: "JPA, Spring Security, APIs REST y arquitecturas"
    },
]

$.each(primarySkills, function (i, skill) {
    $("#skills-container").append(`
    <div class="col-6 col-sm-6 col-md-4 mb-4">
        <div class="card text-center skill-card h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon" loading="lazy">
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
        description: "Aplicaciones Front-End con TypeScript"
    },
    {
        imgLink: "assets/img/icons8-bootstrap.svg",
        alt: "Bootstrap icono",
        title: "Bootstrap",
        description: "Estilo y diseño responsivo"
    },
]

// Renderizar habilidades secundarias con jQuery
$.each(secondarySkills, function (i, skill) {
    $("#secondary-skills-container").append(`
    <div class="col-6 col-sm-6 col-md-4 mb-4">
        <div class="card text-center skill-card h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                <img src="${skill.imgLink}" alt="${skill.title}" class="skill-icon ${skill.extraClass || ''}" loading="lazy">
                <h5 class="card-title mt-4 fw-bold text-white">${skill.title}</h5>
                <p class="text-secondary small mb-0">${skill.description}</p>
            </div>
        </div>
    </div>
    `);
});

// Navegación por puntos con jQuery
$(window).on('scroll', function () {
    const scrollPos = $(window).scrollTop();
    const windowHeight = $(window).height();

    $("section[id]").each(function () {
        const section = $(this);
        const sectionTop = section.offset().top - (windowHeight * 0.45);
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            const activeId = section.attr("id");
            $(".dot-nav-item").removeClass("active");
            $(`.dot-nav-item[href="#${activeId}"]`).addClass("active");
        }
    });
});

// Inicialización de Tooltips (Bootstrap requiere vanilla o jQuery plugin)
$(function () {
    const tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// NUEVOS PROYECTOS
const proyectos = [
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

// Renderizar Proyectos
const proyectosContainer = $("#proyectos-container");
$.each(proyectos, function (i, proyecto) {
    let badgesHTML = '';
    if (proyecto.badges && Array.isArray(proyecto.badges)) {
        $.each(proyecto.badges, function (j, badge) {
            badgesHTML += `<span class="badge ${badge.class} me-1 mb-1">${badge.text}</span> `;
        });
    }

    proyectosContainer.append(`
    <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="proyecto-card" data-url="${proyecto.url}" data-title="${proyecto.title}">
            <div class="proyecto-img-container">
                <img src="${proyecto.image}" class="proyecto-img" alt="${proyecto.title}" loading="lazy">
                <div class="proyecto-overlay">
                    <span class="btn btn-outline-light rounded-pill px-4">Ver Proyecto</span>
                </div>
            </div>
            <div class="p-4 bg-dark">
                <h5 class="fw-bold text-white mb-2">${proyecto.title}</h5>
                <p class="text-secondary small mb-0">${proyecto.description}</p>
            </div>
            <div class="px-4 py-2 border-top border-secondary bg-dark-subtle">
                ${badgesHTML}
            </div>
        </div>
    </div>
    `);
});

// Eventos del Modal de Proyectos
$(".proyecto-card").on("click", function () {
    const url = $(this).data("url");
    const title = $(this).data("title");

    if (url === "#") return;

    $("#proyectoModalLabel").text(title);
    $("#proyectoIframe").attr("src", url);
    $("#proyectoExternalLink").attr("href", url);
    $("#proyectoModal").modal("show");
});

// Limpiar iframe al cerrar el modal
$("#proyectoModal").on("hidden.bs.modal", function () {
    $("#proyectoIframe").attr("src", "");
});