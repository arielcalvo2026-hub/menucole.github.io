const semanas = {

    semana1: [
        {
            dia: "Lunes",
            comida: "Casado con pollo",
            bebida: "Jugo natural",
            postre: "Manzana",
            calorias: 620
        },

        {
            dia: "Martes",
            comida: "Pasta con carne",
            bebida: "Té frío",
            postre: "Sandía",
            calorias: 700
        },

        {
            dia: "Miércoles",
            comida: "Arroz con pollo",
            bebida: "Limonada",
            postre: "Banano",
            calorias: 650
        },

        {
            dia: "Jueves",
            comida: "Pizza integral",
            bebida: "Refresco natural",
            postre: "Yogurt",
            calorias: 720
        },

        {
            dia: "Viernes",
            comida: "Hamburguesa casera",
            bebida: "Batido",
            postre: "Galletas",
            calorias: 800
        }
    ],

    semana2: [
        {
            dia: "Lunes",
            comida: "Tacos de pollo",
            bebida: "Horchata",
            postre: "Piña",
            calorias: 640
        },

        {
            dia: "Martes",
            comida: "Lasaña",
            bebida: "Jugo de mora",
            postre: "Pera",
            calorias: 750
        },

        {
            dia: "Miércoles",
            comida: "Filete de pescado",
            bebida: "Limonada",
            postre: "Uvas",
            calorias: 610
        },

        {
            dia: "Jueves",
            comida: "Burrito de carne",
            bebida: "Té frío",
            postre: "Gelatina",
            calorias: 730
        },

        {
            dia: "Viernes",
            comida: "Nuggets con papas",
            bebida: "Batido de chocolate",
            postre: "Helado",
            calorias: 850
        }
    ],

    semana3: [
        {
            dia: "Lunes",
            comida: "Arroz cantonés",
            bebida: "Té verde",
            postre: "Kiwi",
            calorias: 660
        },

        {
            dia: "Martes",
            comida: "Sopa azteca",
            bebida: "Jugo natural",
            postre: "Melón",
            calorias: 540
        },

        {
            dia: "Miércoles",
            comida: "Pollo al horno",
            bebida: "Limonada",
            postre: "Naranja",
            calorias: 630
        },

        {
            dia: "Jueves",
            comida: "Ravioles",
            bebida: "Té frío",
            postre: "Yogurt",
            calorias: 700
        },

        {
            dia: "Viernes",
            comida: "Hot Dog",
            bebida: "Refresco natural",
            postre: "Cupcake",
            calorias: 780
        }
    ],

    semana4: [
        {
            dia: "Lunes",
            comida: "Casado con carne",
            bebida: "Fresco de cas",
            postre: "Banano",
            calorias: 680
        },

        {
            dia: "Martes",
            comida: "Pasta Alfredo",
            bebida: "Té helado",
            postre: "Fresas",
            calorias: 710
        },

        {
            dia: "Miércoles",
            comida: "Arroz con camarones",
            bebida: "Limonada",
            postre: "Piña",
            calorias: 670
        },

        {
            dia: "Jueves",
            comida: "Enchiladas",
            bebida: "Horchata",
            postre: "Gelatina",
            calorias: 720
        },

        {
            dia: "Viernes",
            comida: "Pizza de pollo",
            bebida: "Batido natural",
            postre: "Helado",
            calorias: 810
        }
    ]

};

// GENERAR TARJETAS

function generarSemana(idContainer, datos){

    const container = document.getElementById(idContainer);

    datos.forEach(menu => {

        container.innerHTML += `

        <div class="card">

            <div class="card-header">
                ${menu.dia}
            </div>

            <div class="card-body">

                <p><strong>Comida:</strong> ${menu.comida}</p>

                <p><strong>Bebida:</strong> ${menu.bebida}</p>

                <p><strong>Postre:</strong> ${menu.postre}</p>

                <div class="nutrition">

                    <p><strong>Calorías:</strong> ${menu.calorias} kcal</p>

                </div>

            </div>

        </div>

        `;

    });

}

generarSemana("container1", semanas.semana1);
generarSemana("container2", semanas.semana2);
generarSemana("container3", semanas.semana3);
generarSemana("container4", semanas.semana4);

// MENU DE HOY

const todayMenu = document.getElementById("today-menu");

const menuHoy = semanas.semana1[2];

todayMenu.innerHTML = `

<div class="today-menu-content">

    <p><strong>Comida:</strong> ${menuHoy.comida}</p>

    <p><strong>Bebida:</strong> ${menuHoy.bebida}</p>

    <p><strong>Postre:</strong> ${menuHoy.postre}</p>

    <br>

    <p><strong>Calorías:</strong> ${menuHoy.calorias} kcal</p>

</div>

`;

// CAMBIAR SEMANA

function mostrarSemana(id){

    const weeks = document.querySelectorAll(".week");

    weeks.forEach(week => {
        week.classList.remove("active-week");
    });

    document.getElementById(id).classList.add("active-week");

    const botones = document.querySelectorAll(".tab-btn");

    botones.forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

}