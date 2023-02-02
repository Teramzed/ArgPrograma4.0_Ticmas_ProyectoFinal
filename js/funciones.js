function get_id_set_func(id_icon, id_element, text_date, default_date) {

    let text = text_date;
    let default_dat = default_date;

    let icon = document.getElementById(`${id_icon}`);
    let element = document.getElementById(`${id_element}`);

    icon.addEventListener('mouseover', function(){
        element.innerHTML = text;
        this.addEventListener('mouseout', function(){
            element.innerHTML = default_dat;
        });
    });
};

get_id_set_func(
    "icon_perfil_pro",
    "perfil_pro",
    `Soy un desarrollador web que busca expandir sus conocimientos en un entorno de proyectos y compañeros con el mismo objetivo. Ser autocrítico me garantiza como persona confiable y honesta, con facilidad para la comunicación interpersonal y resolver problemas de gran complejidad.
    Mis habilidades están en progreso, pero me decanto por el desarrollo full-stack. Manejo conocimientos de nivel medio de HTML5, CSS3, Javascript y Bootstrap. Tengo algo de experiencia en el manejo de Bases de Datos MYSQL y SQLite3. Puedo hacer coding en Python y también desarrollar
    con el framework Django. Mi objetivo último es aprender todo lo que sea capaz en el mundo de la programación web. Mi rápido aprendizaje fluido afirma mi proactividad y mis ánimos para absorver grandes cantidades de conocimientos.`,
    "Perfil profesional"
)

get_id_set_func(
    "user_icon",
    "datos",
    `Vendedor
    </br>
    Luis A. Cuadrado, Central Resistencia | Enero 2015 - Marzo 2016 | 3624-432600 (horario comercial).
    </br>
    · Gestión de productos electrónicos en góndolas y vitrinas.
    </br>
    · Asesoramiento particular sobre elementos de computación.
    </br>
    · Manejo del Sistema para verificación de stock, precios, variedad, etc.`,
    "Experiencia"
);

get_id_set_func("email_icon", "email", "desmaret30@gmail.com", "Email");
get_id_set_func("cel_icon", "cel", "+54 3624-949742", "Móvil");
get_id_set_func("loc_icon", "residencia", "Argentina, Chaco, Resistencia", "Locación");

get_id_set_func(
    "est_icon",
    "estudios",
    `· Secundario completo (Eva Duarte Nº85).
    </br>
    · Universidad en proceso (Lic. en Letras (UNNE)).
    </br>
    </br>
    · Cursando Master en Python de Udemy.
    </br>
    · Cursando Primeros pasos en el desarrollo Front-End de Ticmas (Argentina Programa 4.0)
    </br>
    </br>
    · <b>Instituto argentino de Computación (IAC)</b>
    </br>
    Configuración de PC's y Redes.
    </br>
    Armado y Reparación de Pc y Notebooks.
    </br>
    </br>
    · <b>Instituto Nacional de Informática (INI)</b>
    </br>
    Técnico en Hardware y Redes Informáticas.`,
    "Educación"
);
get_id_set_func(
    "per_icon",
    "personalidad",
    `· Seriedad, honestidad y puntualidad.
    </br>
    · Responsabilidad y compromiso.
    </br>
    · Adaptabilidad a nuevos entornos.
    </br>
    · Partidario de la comunicación para la resolución de problemas.
    </br>
    · Proactividad.
    </br>
    · Autodidacta, autocrítico y capacidad analítica.
    </br>
    · Buena presencia y excelente relación interpersonal.`,
    "Actitudes y habilidades"
);