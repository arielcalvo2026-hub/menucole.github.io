const menus = [

    // Semana 1
    [
        { dia: "Lunes", comida: "Arroz con pollo" },
        { dia: "Martes", comida: "Casado con carne" },
        { dia: "Miércoles", comida: "Pasta" },
        { dia: "Jueves", comida: "Hamburguesa" },
        { dia: "Viernes", comida: "Pizza" }
    ],

    // Semana 2
    [
        { dia: "Lunes", comida: "Tacos" },
        { dia: "Martes", comida: "Lasagna" },
        { dia: "Miércoles", comida: "Arroz cantonés" },
        { dia: "Jueves", comida: "Hot dog" },
        { dia: "Viernes", comida: "Pollo frito" }
    ],

    // Semana 3
    [
        { dia: "Lunes", comida: "Chifrijo" },
        { dia: "Martes", comida: "Sopa negra" },
        { dia: "Miércoles", comida: "Spaghetti" },
        { dia: "Jueves", comida: "Burritos" },
        { dia: "Viernes", comida: "Nachos" }
    ],

    // Semana 4
    [
        { dia: "Lunes", comida: "Empanadas" },
        { dia: "Martes", comida: "Arroz con camarones" },
        { dia: "Miércoles", comida: "Pollo BBQ" },
        { dia: "Jueves", comida: "Casado" },
        { dia: "Viernes", comida: "Tortas" }
    ]
];

const selector = document.getElementById("selectorSemana");
const menuContainer = document.getElementById("menuContainer");
const menuHoy = document.getElementById("menuHoy");

function mostrarMenu(semana) {

    menuContainer.innerHTML = "";

    menus[semana].forEach(item => {

        menuContainer.innerHTML += `
            <div class="dia">
                <h2>${item.dia}</h2>
                <p>${item.comida}</p>
            </div>
        `;
    });

    mostrarMenuHoy(semana);
}

function mostrarMenuHoy(semana) {

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    const hoy = new Date().getDay();
    const nombreDia = dias[hoy];

    const menuDia = menus[semana].find(
        item => item.dia === nombreDia
    );

    if (menuDia) {
        menuHoy.innerHTML =
            `${menuDia.dia}: ${menuDia.comida}`;
    } else {
        menuHoy.innerHTML =
            "Hoy no hay servicio de comedor";
    }
}

selector.addEventListener("change", () => {
    mostrarMenu(selector.value);
});

mostrarMenu(0);