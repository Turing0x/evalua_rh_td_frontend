import type { Area } from "../interfaces/area.interface";

export const area_data: Area[] = [
  {
    id: "info",
    title: "Información",
    image: "info.webp",
    description:
      "El área de Información evalúa la capacidad de los empleados para gestionar y aprovechar los datos en entornos digitales. En la era de la información, saber navegar, buscar, evaluar, almacenar y recuperar información relevante es esencial para la toma de decisiones fundamentadas y ágiles. Esta área permite entender el nivel de habilidad de los empleados para encontrar datos importantes, filtrar y seleccionar los que son útiles, y manejar grandes volúmenes de información digital de manera organizada y segura. Mejorar estas habilidades fortalece la capacidad de respuesta y competitividad de la empresa.",
    sections: [
      {
        title: "Navegación, búsqueda y filtrado de información",
        description:
          "Esta competencia mide la capacidad de un empleado para localizar información relevante de forma rápida y eficiente en el entorno digital. En una era saturada de datos, saber buscar, filtrar y organizar información es fundamental para tomar decisiones informadas y responder con agilidad a los desafíos laborales.",
        questions: [
          {
            text: "¿Con qué frecuencia utiliza diferentes herramientas de búsqueda para obtener información relevante en su campo?",
            name: "search_tools_frequency",
            description:
              "Esta pregunta evalúa la habilidad del empleado para buscar información de manera efectiva, lo que es crucial para tomar decisiones informadas y resolver problemas de manera eficiente. Al entender cómo frecuentemente se utilizan diferentes herramientas de búsqueda, se puede determinar si el empleado está aprovechando al máximo los recursos disponibles para encontrar información precisa y relevante.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo organiza los resultados de búsqueda para encontrar información específica de manera rápida?",
            name: "search_organization_skill",
            description:
              "Esta pregunta evalúa la habilidad del empleado para organizar y priorizar los resultados de búsqueda de manera efectiva, lo que es crucial para encontrar información específica de manera rápida y eficiente. Esto es especialmente importante en entornos laborales donde el tiempo es valioso y la información precisa es necesaria para tomar decisiones informadas.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan bien utiliza filtros avanzados para reducir el volumen de información a lo esencial?",
            name: "advanced_filtering_skill",
            description:
              "Esta pregunta evalúa la habilidad del empleado para utilizar herramientas de filtrado avanzadas para reducir grandes cantidades de información a solo lo más relevante. Esto es crucial en entornos laborales donde la información es abundante, ya que permite al empleado enfocarse en los datos más importantes y tomar decisiones informadas de manera eficiente.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad identifica y navega en sitios o bases de datos específicos para obtener información especializada?",
            name: "database_navigation_skill",
            description:
              "Esta pregunta evalúa la capacidad del empleado para encontrar información específica y precisa en sitios o bases de datos especializados. Esto es crucial en el ámbito laboral, ya que permite al empleado acceder a información valiosa y actualizada para tomar decisiones informadas y resolver problemas de manera eficiente.",
            option_type: "type_2",
          },
          {
            text: "¿Cómo asegura la precisión y actualización de la información que consulta?",
            name: "information_accuracy_check",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para asegurar que la información que consulta es precisa y actualizada. Esto es crucial en el ámbito laboral, ya que la información inexacta o desactualizada puede llevar a decisiones mal informadas y errores costosos. Al evaluar cómo el empleado asegura la precisión y actualización de la información, se puede determinar si está tomando medidas adecuadas para garantizar la integridad de los datos.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Evaluación de información, datos y contenidos digitales",
        description:
          "Evaluar la veracidad, precisión y relevancia de la información digital es crucial para evitar errores y desinformación. Esta competencia permite determinar si el empleado puede distinguir entre información confiable y no confiable, algo esencial para la toma de decisiones informadas en el ámbito laboral.",
        questions: [
          {
            text: "¿Qué tan frecuentemente verifica la fiabilidad y exactitud de la información que encuentra?",
            name: "information_reliability_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para verificar la fiabilidad y exactitud de la información que encuentra. Esto es crucial en el ámbito laboral, ya que la información inexacta o no confiable puede llevar a decisiones mal informadas y errores costosos. Al evaluar la frecuencia con la que el empleado verifica la fiabilidad y exactitud de la información, se puede determinar si está tomando medidas adecuadas para garantizar la integridad de los datos.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo analiza los datos para determinar su relevancia y autenticidad en su trabajo?",
            name: "data_analysis_skill",
            description: "",
            option_type: "type_2",
          },
          {
            text: "¿Cuánta habilidad tiene para identificar sesgos o desinformación en los contenidos digitales?",
            name: "bias_identification_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para distinguir entre información precisa y desinformación en los contenidos digitales. Esto es crucial en el ámbito laboral, ya que la desinformación puede llevar a decisiones mal informadas y errores costosos. Al evaluar la habilidad del empleado para identificar sesgos o desinformación, se puede determinar si está tomando medidas adecuadas para garantizar la integridad de los datos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan bien puede evaluar y validar contenidos complejos en su área de especialidad?",
            name: "complex_content_evaluation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para analizar y verificar la precisión de información especializada y compleja en su campo de trabajo. Esto es crucial para asegurar que las decisiones se basen en información confiable y actualizada, lo que puede afectar directamente el éxito de proyectos y la toma de decisiones informadas.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánto se apoya en fuentes verificadas y qué criterios utiliza para seleccionar información de calidad?",
            name: "quality_information_criteria",
            description:
              "Esta pregunta es crucial para evaluar la capacidad del empleado para seleccionar información de calidad. Al entender cómo se apoya en fuentes verificadas y qué criterios utiliza, se puede determinar si el empleado está tomando medidas adecuadas para garantizar la integridad de los datos.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Almacenamiento y recuperación de información",
        description:
          "La capacidad de almacenar y recuperar información digital de forma estructurada y segura facilita el acceso a datos importantes cuando se necesitan. Esta competencia es fundamental para mantener la continuidad y eficiencia en los procesos laborales, asegurando que la información esté siempre disponible y organizada.",
        questions: [
          {
            text: "¿Qué tan efectiva es su capacidad para almacenar información digital en ubicaciones organizadas y seguras?",
            name: "digital_storage_effectiveness",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para almacenar información digital de manera organizada y segura. Esto es crucial en el ámbito laboral, ya que la información almacenada de manera insegura puede ser vulnerable a pérdidas, daños o acceso no autorizado, lo que puede afectar negativamente la productividad y la confidencialidad de los datos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué métodos emplea para clasificar y recuperar datos almacenados digitalmente?",
            name: "data_classification_methods",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para organizar y acceder a los datos de manera eficiente. Al entender cómo clasifica y recupera los datos, se puede determinar si el empleado está utilizando los métodos más adecuados para encontrar la información necesaria de manera rápida y precisa, lo que es crucial para la toma de decisiones informadas y la productividad en el trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia actualiza o limpia sus sistemas de almacenamiento digital para mantenerlos eficientes?",
            name: "storage_maintenance_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para mantener la eficiencia de los sistemas de almacenamiento digital. La actualización y limpieza frecuente de estos sistemas es crucial para garantizar que funcionen de manera óptima y segura, lo que puede afectar directamente la productividad y la confidencialidad de los datos.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo organiza y recupera rápidamente información almacenada para su uso en proyectos específicos?",
            name: "project_storage_retrieval_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para acceder y utilizar información almacenada de manera eficiente en proyectos específicos. Esto es crucial para asegurar que los proyectos se desarrollen de manera efectiva y eficiente, ya que la información almacenada es un recurso valioso que puede influir en el éxito del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánto conocimiento tiene sobre la optimización de almacenamiento en la nube o dispositivos de alta seguridad?",
            name: "cloud_security_knowledge",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para proteger los datos de la empresa al almacenarlos en la nube o dispositivos de alta seguridad. Esto es crucial para prevenir la pérdida o acceso no autorizado a información confidencial, lo que puede afectar negativamente la reputación y el éxito de la empresa.",
            option_type: "type_2",
          },
        ],
      },
    ],
  },
  {
    id: "comunicacion",
    title: "Comunicación",
    image: "comunication.webp",
    description:
      "La comunicación efectiva en entornos digitales es clave para el éxito organizacional. Esta área evalúa cómo los empleados interactúan y colaboran a través de canales digitales, desde la comunicación interpersonal hasta la participación en comunidades en línea y la gestión de la identidad digital. Incluye habilidades para compartir información de manera segura, respetar normas de netiqueta y mantener un perfil digital profesional y confiable. Fomentar estas habilidades permite a la empresa mejorar la coordinación interna, la colaboración entre equipos y la imagen corporativa en el entorno digital.",
    sections: [
      {
        title: "Interacción mediante las tecnologías digitales",
        description:
          "Interaccionar efectivamente a través de tecnologías digitales es esencial en un entorno laboral moderno. Esta competencia evalúa la habilidad para comunicarse profesionalmente en entornos virtuales, promoviendo la colaboración y la productividad a través de medios digitales.",
        questions: [
          {
            text: "¿Con qué frecuencia se comunica eficazmente a través de plataformas digitales en su lugar de trabajo?",
            name: "digital_communication_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para comunicarse de manera efectiva en entornos digitales, lo que es crucial para la colaboración y la productividad en el lugar de trabajo. Al entender la frecuencia de comunicación digital efectiva, se puede determinar si el empleado está utilizando las herramientas digitales de manera adecuada para interactuar con sus colegas y lograr los objetivos del equipo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan hábil es para utilizar herramientas digitales avanzadas de comunicación (como plataformas colaborativas)?",
            name: "advanced_communication_tools_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para utilizar herramientas digitales avanzadas de comunicación de manera efectiva. Esto es crucial en el ámbito laboral, ya que la habilidad para utilizar estas herramientas puede mejorar la colaboración, la productividad y la eficiencia en el trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tanto adapta su estilo de comunicación al contexto y al medio digital?",
            name: "communication_style_adaptation",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para ajustar su forma de comunicarse según el contexto y el medio digital utilizado. Esto es crucial para asegurar que la comunicación sea efectiva, clara y respetuosa en diferentes entornos digitales, lo que puede influir en la comprensión y el éxito de los proyectos.",
            option_type: "type_2",
          },
          {
            text: "¿Cuán cómodamente se desenvuelve en plataformas digitales para coordinar tareas complejas?",
            name: "digital_platform_comfort",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para coordinar tareas complejas en plataformas digitales. La comodidad y la eficiencia en el uso de estas plataformas pueden influir en la productividad y el éxito de los proyectos.",
            option_type: "type_3",
          },
          {
            text: "¿Qué nivel de dominio tiene en la configuración avanzada de herramientas de comunicación para optimizar la interacción?",
            name: "advanced_communication_configuration_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para configurar herramientas de comunicación avanzadas. Esto es crucial para optimizar la interacción en el lugar de trabajo, lo que puede influir en la colaboración, la productividad y la eficiencia del equipo.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Compartir información y contenidos digitales",
        description:
          "Compartir información de manera segura y efectiva permite a los equipos trabajar de forma sincronizada. Esta competencia asegura que los empleados puedan transmitir datos y contenidos digitales relevantes sin comprometer la seguridad o la privacidad de la información.",
        questions: [
          {
            text: "¿Con qué frecuencia comparte información digital respetando las normas de la organización?",
            name: "organization_policy_compliance_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para compartir información digital de manera segura y respetando las normas de la organización. Esto es crucial para proteger la privacidad y la seguridad de la información, así como para mantener la integridad de la empresa.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo evalúa la seguridad y privacidad al compartir documentos o información en línea?",
            name: "security_privacy_evaluation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para considerar la seguridad y la privacidad al compartir información en línea. Esto es crucial para proteger la confidencialidad de la información y prevenir posibles violaciones de seguridad, lo que puede tener consecuencias graves para la empresa y sus clientes.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia selecciona y utiliza herramientas específicas para compartir contenidos con colegas o clientes?",
            name: "tool_selection_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para elegir y utilizar las herramientas adecuadas para compartir información de manera efectiva. Esto es crucial para asegurar que la comunicación sea clara, segura y eficiente, lo que puede influir en la productividad y el éxito de los proyectos.",
            option_type: "type_1",
          },
          {
            text: "¿Cuán competente es para compartir datos en formatos compatibles y accesibles para otros?",
            name: "data_format_competency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para compartir datos de manera que sean fáciles de entender y utilizar para otros. Esto es crucial para asegurar que la información se comparte de manera efectiva, lo que puede influir en la productividad y el éxito de los proyectos.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánto se asegura de que el contenido que comparte sea útil y relevante para su audiencia?",
            name: "content_relevance_assurance",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para asegurarse de que el contenido que comparte sea útil y relevante para su audiencia. Esto es crucial para mantener la satisfacción y el compromiso de la audiencia, lo que puede influir en el éxito de los proyectos.",
            option_type: "type_1",
          },
        ],
      },
      {
        title: "Participación ciudadana en línea",
        description:
          "Participar activamente en plataformas y foros en línea impulsa la colaboración y el aprendizaje continuo. Esta competencia mide la habilidad del empleado para involucrarse en comunidades digitales y contribuir a temas relevantes en su área, promoviendo el intercambio de conocimientos y buenas prácticas.",
        questions: [
          {
            text: "¿Qué tanto participa en foros o plataformas de discusión relacionados con su área?",
            name: "forum_discussion_participation",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para involucrarse en comunidades digitales relacionadas con su campo de trabajo. Esto es crucial para el aprendizaje continuo, el intercambio de ideas y la resolución de problemas, lo que puede mejorar la eficiencia y la innovación en el lugar de trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan hábil es para identificar y participar en actividades de desarrollo comunitario digital?",
            name: "community_development_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar y participar en actividades que fomentan el crecimiento y el desarrollo de la comunidad en línea. Esto es crucial para promover la colaboración, el aprendizaje y el intercambio de ideas, lo que puede llevar a innovaciones y mejoras en el lugar de trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia participa en iniciativas en línea que promueven mejoras sociales o en su industria?",
            name: "social_initiative_participation_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para involucrarse en actividades que buscan mejorar la sociedad o su sector laboral a través de la tecnología. Esto es crucial para fomentar la responsabilidad social, la innovación y el crecimiento positivo en la empresa y su entorno.",
            option_type: "type_1",
          },
          {
            text: "¿Cuán efectiva es su capacidad para colaborar en proyectos de participación ciudadana digitalmente?",
            name: "digital_citizen_collaboration_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para trabajar con otros en proyectos que buscan mejorar la sociedad a través de la tecnología. Esto es crucial para asegurar que los proyectos de participación ciudadana sean exitosos y tengan un impacto positivo en la comunidad.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia lidera iniciativas en línea que impactan a su comunidad?",
            name: "online_initiative_leadership_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar iniciativas en línea que tienen un impacto positivo en su comunidad. Esto es crucial para promover el desarrollo y la mejora de la sociedad, lo que puede influir en el éxito de los proyectos y la reputación de la empresa.",
            option_type: "type_1",
          },
        ],
      },
      {
        title: "Colaboración mediante canales digitales",
        description:
          "Colaborar en proyectos digitales permite un trabajo más ágil y eficaz, especialmente en equipos distribuidos. Esta competencia evalúa cómo el empleado utiliza herramientas digitales para gestionar tareas y coordinar con otros, lo cual es esencial para el éxito de proyectos colaborativos.",
        questions: [
          {
            text: "¿Con qué frecuencia trabaja en proyectos colaborativos usando herramientas digitales?",
            name: "digital_collaborative_projects_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para trabajar en proyectos colaborativos utilizando herramientas digitales. Esto es crucial para el éxito de los proyectos colaborativos, ya que las herramientas digitales pueden mejorar la eficiencia y la comunicación en el equipo.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo gestiona el flujo de información entre diferentes miembros de un equipo digitalmente?",
            name: "information_flow_management_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para gestionar el flujo de información de manera efectiva en un equipo digital. Esto es crucial para asegurar que todos los miembros del equipo estén informados y trabajen juntos de manera eficiente, lo que puede mejorar la productividad y el éxito del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan hábil es en la organización y ejecución de tareas colaborativas en tiempo real?",
            name: "real_time_collaboration_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para coordinar y ejecutar tareas con otros miembros del equipo en tiempo real. Esto es crucial en entornos de trabajo dinámicos, donde la capacidad de adaptarse y responder rápidamente a los cambios es esencial para el éxito del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Cuán competente es para facilitar la colaboración eficiente y coordinar acciones en línea?",
            name: "online_collaboration_facilitation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para facilitar la colaboración entre los miembros del equipo en entornos digitales. Esto es crucial para asegurar que los proyectos se desarrollen de manera eficiente y que los objetivos se logren de manera efectiva.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tanto domina herramientas de gestión de proyectos para coordinar colaboraciones complejas?",
            name: "project_management_tool_proficiency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para utilizar herramientas de gestión de proyectos de manera efectiva, lo que es crucial para coordinar colaboraciones complejas y asegurar el éxito de los proyectos. Esto es especialmente relevante en entornos de trabajo digitales, donde la comunicación y la coordinación pueden ser más desafiantes.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Colaboración mediante canales digitales",
        description:
          "Colaborar en proyectos digitales permite un trabajo más ágil y eficaz, especialmente en equipos distribuidos. Esta competencia evalúa cómo el empleado utiliza herramientas digitales para gestionar tareas y coordinar con otros, lo cual es esencial para el éxito de proyectos colaborativos.",
        questions: [
          {
            text: "¿Con qué frecuencia trabaja en proyectos colaborativos usando herramientas digitales?",
            name: "digital_collaborative_projects_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para trabajar en equipo y utilizar herramientas digitales para lograr objetivos comunes. Esto es crucial en entornos laborales modernos, donde la colaboración y la comunicación efectivas son fundamentales para el éxito de los proyectos.",
            option_type: "type_1",
          },
          {
            text: "¿Cómo gestiona el flujo de información entre diferentes miembros de un equipo digitalmente?",
            name: "information_flow_management_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para gestionar el flujo de información de manera efectiva en un equipo digital. Esto es crucial para asegurar que todos los miembros del equipo estén informados y trabajen juntos de manera eficiente, lo que puede mejorar la productividad y el éxito del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan hábil es en la organización y ejecución de tareas colaborativas en tiempo real?",
            name: "real_time_collaboration_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para coordinar y ejecutar tareas con otros miembros del equipo en tiempo real. Esto es crucial en entornos de trabajo dinámicos, donde la capacidad de adaptarse y responder rápidamente a los cambios es esencial para el éxito del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Cuán competente es para facilitar la colaboración eficiente y coordinar acciones en línea?",
            name: "online_collaboration_facilitation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar y coordinar esfuerzos en entornos digitales, lo que es crucial para el éxito de proyectos que involucran a equipos distribuidos. Al evaluar esta habilidad, se puede determinar si el empleado puede fomentar la colaboración efectiva y la coordinación de acciones en línea, lo que puede mejorar la eficiencia y la productividad del equipo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tanto domina herramientas de gestión de proyectos para coordinar colaboraciones complejas?",
            name: "project_management_tool_proficiency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para utilizar herramientas de gestión de proyectos de manera efectiva, lo que es crucial para coordinar colaboraciones complejas y asegurar el éxito de los proyectos. Esto es especialmente relevante en entornos de trabajo digitales, donde la comunicación y la coordinación pueden ser más desafiantes.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Netiqueta",
        description:
          "Conocer y aplicar normas de etiqueta en el entorno digital asegura interacciones respetuosas y efectivas. Esta competencia es fundamental para mantener un ambiente profesional en línea, evitando malentendidos y promoviendo relaciones laborales saludables.",
        questions: [
          {
            text: "¿Qué tan seguido respeta las normas de etiqueta en comunicaciones digitales?",
            name: "digital_communication_etiquette_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para mantener un ambiente profesional en línea, evitando malentendidos y promoviendo relaciones laborales saludables. Al evaluar esta habilidad, se puede determinar si el empleado puede comunicarse de manera efectiva y respetuosa en entornos digitales.",
            option_type: "type_1",
          },
          {
            text: "¿Cuán atento es para adaptarse a la cultura de comunicación de diferentes plataformas digitales?",
            name: "platform_culture_adaptation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptarse a las normas y expectativas específicas de cada plataforma digital, lo que es crucial para comunicarse de manera efectiva y evitar malentendidos. Al evaluar esta habilidad, se puede determinar si el empleado puede interactuar de manera adecuada en diferentes entornos digitales, lo que es fundamental para el éxito en entornos laborales modernos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan proactivo es en utilizar netiqueta para crear un ambiente respetuoso y profesional en línea?",
            name: "netiquette_proactivity",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para tomar la iniciativa en mantener un ambiente digital respetuoso y profesional. Al ser proactivo en el uso de netiqueta, el empleado puede fomentar la comunicación efectiva, evitar conflictos y promover una imagen positiva de la empresa en línea.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad aplica normas avanzadas de etiqueta para mantener un entorno de trabajo positivo?",
            name: "advanced_netiquette_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para aplicar normas avanzadas de etiqueta en entornos digitales, lo que es crucial para mantener un ambiente de trabajo positivo y respetuoso. Al evaluar esta habilidad, se puede determinar si el empleado puede interactuar de manera efectiva y profesional en línea, lo que puede mejorar la comunicación y la colaboración dentro del equipo.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia asesora a otros sobre las prácticas de netiqueta en comunicaciones digitales?",
            name: "netiquette_advising_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para compartir su conocimiento sobre netiqueta con otros, lo que puede mejorar la comunicación efectiva y respetuosa en el entorno digital. Al evaluar esta habilidad, se puede determinar si el empleado puede actuar como un modelo a seguir en cuanto a la aplicación de normas de etiqueta en línea, lo que puede contribuir a un ambiente de trabajo más profesional y respetuoso.",
            option_type: "type_1",
          },
        ],
      },
      {
        title: "Gestión de la identidad digital",
        description:
          "La identidad digital refleja la imagen profesional de una persona en línea. Esta competencia evalúa cómo el empleado gestiona y protege su identidad en plataformas digitales, asegurando una representación coherente y profesional que inspire confianza y credibilidad.",
        questions: [
          {
            text: "¿Qué tanto cuida la imagen personal que proyecta en plataformas digitales?",
            name: "digital_image_care",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para mantener una imagen profesional y coherente en línea. Al evaluar esta habilidad, se puede determinar si el empleado puede proyectar una imagen positiva de la empresa en entornos digitales.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánta conciencia tiene sobre cómo gestionar sus perfiles digitales para alinearlos con sus metas?",
            name: "digital_profile_goal_alignment",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para gestionar sus perfiles digitales de manera efectiva, asegurando que reflejen sus objetivos y metas profesionales. Al evaluar esta habilidad, se puede determinar si el empleado puede presentarse de manera coherente y profesional en línea, lo que puede influir en su credibilidad y oportunidades laborales.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan bien puede mantener una identidad consistente en varias plataformas digitales?",
            name: "multi_platform_identity_management",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para mantener una identidad profesional y coherente en diferentes plataformas digitales. Al evaluar esta habilidad, se puede determinar si el empleado puede representar de manera efectiva a la empresa en entornos digitales.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan seguido protege sus datos personales mientras mantiene una identidad profesional en línea?",
            name: "personal_data_protection_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para proteger sus datos personales mientras mantiene una presencia profesional en línea. Esto es crucial para evitar la exposición de información confidencial y mantener la integridad de la identidad digital.",
            option_type: "type_1",
          },
          {
            text: "¿Con qué frecuencia ajusta su identidad digital para reflejar sus logros y conocimientos actualizados?",
            name: "digital_identity_update_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para mantener su identidad digital actualizada, reflejando sus logros y conocimientos más recientes. Esto es crucial para que la identidad digital del empleado sea precisa y refleje su crecimiento profesional, lo que puede influir en su credibilidad y oportunidades laborales.",
            option_type: "type_1",
          },
        ],
      },
    ],
  },
  {
    id: "creacion_contenidos",
    title: "Creación de contenidos",
    image: "content.webp",
    description:
      "La creación de contenidos digitales es fundamental para transmitir mensajes claros, innovadores y efectivos en el ámbito empresarial. Esta área mide la capacidad de los empleados para desarrollar, integrar y reelaborar contenido digital que aporte valor a la empresa. También evalúa el conocimiento sobre derechos de autor y programación, aspectos importantes para crear contenido ético, original y ajustado a las necesidades de la organización. Fomentar estas competencias permite a la empresa aprovechar el contenido digital para mejorar la comunicación, la marca y los procesos internos.",
    sections: [
      {
        title: "Desarrollo de contenidos digitales",
        description:
          "Crear contenido digital adaptado a las necesidades de la organización es una habilidad esencial para comunicar ideas, proyectos y logros. Esta competencia permite evaluar la capacidad de los empleados para generar material visual y textual de calidad, mejorando la comunicación interna y externa.",
        questions: [
          {
            text: "¿Con qué frecuencia crea contenido digital (como documentos, gráficos, videos) en su trabajo?",
            name: "digital_content_creation_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para generar contenido digital de manera regular. Al evaluar esta habilidad, se puede determinar si el empleado puede mantener un flujo constante de contenido digital, lo que puede ser crucial para la estrategia de marketing y comunicación de la empresa.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan hábil es para desarrollar contenido en diferentes formatos digitales según el contexto?",
            name: "multi_format_content_development_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptar el contenido a diferentes formatos digitales, como videos, imágenes, documentos, etc., según el contexto y el público objetivo. Esto es crucial para asegurar que el contenido sea efectivo y atractivo para diferentes audiencias, lo que puede influir en la comunicación y el impacto de la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan cómodo se siente usando herramientas avanzadas para la creación de contenido digital?",
            name: "advanced_content_tool_comfort",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para sentirse cómodo al utilizar herramientas avanzadas para la creación de contenido digital. Esto es crucial para determinar si el empleado puede aprovechar al máximo las herramientas disponibles para crear contenido de alta calidad, lo que puede influir en la eficacia de la comunicación y el impacto de la empresa.",
            option_type: "type_3",
          },
          {
            text: "¿Qué tan competente es para producir contenido digital que cumpla con altos estándares de calidad?",
            name: "high_quality_content_production_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para producir contenido digital de alta calidad. Al evaluar esta habilidad, se puede determinar si el empleado puede mantener un alto nivel de calidad en su trabajo, lo que puede ser crucial para la reputación y el éxito de la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánta experiencia tiene en el uso de software profesional para la creación de contenido digital?",
            name: "professional_content_software_experience",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para utilizar herramientas avanzadas para la creación de contenido digital de alta calidad. Esto es crucial para determinar si el empleado puede aprovechar al máximo las herramientas disponibles para crear contenido efectivo, lo que puede influir en la eficacia de la comunicación y el impacto de la empresa.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Integración y reelaboración de contenidos digitales",
        description:
          "Saber combinar y adaptar contenidos de diversas fuentes ayuda a personalizar la información y hacerla relevante para distintos públicos. Esta competencia evalúa la habilidad de un empleado para reutilizar y dar un nuevo propósito a la información digital, optimizando los recursos de la empresa.",
        questions: [
          {
            text: "¿Con qué frecuencia adapta y reutiliza contenido existente para nuevos fines?",
            name: "content_adaptation_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para ser eficiente en la creación de contenido, reutilizando y adaptando contenido existente para nuevos propósitos. Esto puede ayudar a reducir el tiempo y los recursos necesarios para crear contenido nuevo, y asegurar que el contenido existente se mantiene relevante y útil.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan bien organiza y combina múltiples tipos de contenido digital en un solo proyecto?",
            name: "multi_content_organization_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para combinar diferentes tipos de contenido digital de manera efectiva en un proyecto. Esto es crucial para asegurar que el contenido sea coherente, fácil de seguir y atractivo para el público objetivo, lo que puede influir en la eficacia de la comunicación y el impacto del proyecto.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad integra contenidos de fuentes variadas para crear recursos únicos?",
            name: "content_integration_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para combinar información de diferentes fuentes para crear algo nuevo y valioso. Esto es crucial en un entorno digital, donde la información se encuentra dispersa y es necesario sintetizarla para crear contenido coherente y atractivo.",
            option_type: "type_2",
          },
          {
            text: "¿Cuán avanzado es su proceso de personalización de contenidos digitales para distintos públicos?",
            name: "content_customization_advanced_level",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptar el contenido digital a las necesidades específicas de diferentes audiencias. Esto es crucial para asegurar que el contenido sea relevante y atractivo para cada público, lo que puede influir en la eficacia de la comunicación y el impacto de la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan experto es en fusionar contenidos complejos para crear presentaciones claras y coherentes?",
            name: "complex_content_fusion_expertise",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para combinar información compleja de manera efectiva, creando presentaciones claras y fáciles de entender. Esto es crucial para comunicar ideas de manera efectiva, especialmente en entornos empresariales donde la claridad y la coherencia son fundamentales para la toma de decisiones informadas.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Derechos de autor y licencias",
        description:
          "Respetar los derechos de autor y las licencias protege a la empresa de problemas legales y fomenta el uso ético de la información. Esta competencia mide el conocimiento y la aplicación de prácticas relacionadas con la propiedad intelectual en el uso y creación de contenidos digitales.",
        questions: [
          {
            text: "¿Con qué frecuencia verifica los derechos de autor antes de utilizar contenido de terceros?",
            name: "copyright_verification_frequency",
            description:
              "Esta pregunta es importante porque evalúa la conciencia y el respeto del empleado hacia los derechos de autor de otros creadores. Verificar los derechos de autor antes de utilizar contenido de terceros es crucial para evitar violaciones de la propiedad intelectual y posibles problemas legales. Esto asegura que la empresa utilice contenido de manera ética y legal, protegiendo su reputación y evitando conflictos.",
            option_type: "type_1",
          },
          {
            text: "¿Cuán familiarizado está con las licencias de uso y los derechos de autor en contenido digital?",
            name: "copyright_and_licensing_familiarity",
            description:
              "Esta pregunta es importante porque evalúa el conocimiento del empleado sobre las licencias de uso y los derechos de autor en contenido digital. Esto es crucial para asegurar que el contenido digital se utilice de manera ética y legal, protegiendo la propiedad intelectual de los creadores y evitando problemas legales para la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad aplica el uso de licencias adecuadas en sus contenidos digitales?",
            name: "license_application_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para aplicar las licencias adecuadas a los contenidos digitales, asegurando que se utilicen de manera legal y ética. Esto es crucial para proteger la propiedad intelectual de los creadores y evitar problemas legales para la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánto respeta y utiliza los principios de propiedad intelectual en proyectos digitales avanzados?",
            name: "intellectual_property_respect_skill",
            description:
              "Esta pregunta es importante porque evalúa la ética y el respeto del empleado hacia la propiedad intelectual en proyectos digitales avanzados. Respetar y utilizar los principios de propiedad intelectual es crucial para proteger los derechos de los creadores y evitar problemas legales. Esto asegura que la empresa opere de manera ética y legal, protegiendo su reputación y evitando conflictos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué nivel de experiencia tiene en la gestión y protección de los derechos de autor en sus propias creaciones?",
            name: "copyright_management_experience",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para proteger sus propias creaciones de violaciones de los derechos de autor. Esto es crucial para asegurar que el trabajo original del empleado sea respetado y no se utilice sin permiso, lo que puede afectar su reputación y el valor de su trabajo.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Programación",
        description:
          "La programación permite crear y personalizar herramientas digitales, optimizando procesos y adaptando soluciones a las necesidades específicas de la organización. Esta competencia evalúa la habilidad para desarrollar y mantener código, promoviendo la innovación y mejorando la eficiencia en el entorno laboral.",
        questions: [
          {
            text: "¿Qué tan frecuentemente realiza tareas básicas de programación o scripting en su trabajo?",
            name: "basic_programming_frequency",
            description:
              "Esta pregunta es importante porque evalúa la frecuencia con la que el empleado aplica habilidades de programación básicas en su trabajo diario. Esto es crucial para determinar si el empleado tiene las habilidades necesarias para automatizar tareas, resolver problemas y mejorar procesos, lo que puede afectar la eficiencia y la productividad en el lugar de trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tanto puede desarrollar y mantener código simple para proyectos específicos?",
            name: "simple_code_development_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para crear y mantener código básico para proyectos específicos. Esto es crucial para determinar si el empleado puede contribuir a la creación de soluciones digitales sencillas, lo que puede afectar la eficiencia y la productividad en el lugar de trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad implementa estructuras de código avanzadas o utiliza frameworks específicos?",
            name: "advanced_code_structure_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para implementar estructuras de código avanzadas y utilizar frameworks específicos, lo que es crucial para el desarrollo de aplicaciones y sistemas complejos. Esto asegura que el empleado puede crear soluciones digitales escalables, eficientes y seguras, lo que puede afectar la eficiencia y la productividad en el lugar de trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál competente es en adaptar y optimizar código para proyectos complejos?",
            name: "complex_code_adaptation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptar y optimizar código para proyectos complejos, lo que es crucial para el éxito de proyectos que requieren soluciones digitales avanzadas. Esto asegura que el empleado puede manejar proyectos de gran escala, identificar y resolver problemas de código, y mejorar la eficiencia y la escalabilidad de las aplicaciones, lo que puede afectar la productividad y la eficiencia en el lugar de trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia puede resolver problemas de programación y mejorar funcionalidades en sistemas grandes?",
            name: "problem_solving_frequency_in_large_systems",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para resolver problemas de programación y mejorar funcionalidades en sistemas grandes. Esto es crucial para determinar si el empleado puede manejar proyectos de gran escala, identificar y resolver problemas de código, y mejorar la eficiencia y la escalabilidad de las aplicaciones, lo que puede afectar la productividad y la eficiencia en el lugar de trabajo.",
            option_type: "type_1",
          },
        ],
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    image: "security.webp",
    description:
      "La seguridad en el entorno digital es crucial para proteger los activos de información y la integridad de la empresa. Esta área evalúa la habilidad de los empleados para proteger sus dispositivos, gestionar datos personales de forma segura y cuidar su bienestar en el uso de tecnología. También abarca la responsabilidad ambiental en el uso de recursos digitales. Fortalecer esta área reduce riesgos de ciberseguridad, protege la información sensible y fomenta un uso responsable de la tecnología, contribuyendo a un ambiente de trabajo seguro y sostenible.",
    sections: [
      {
        title: "Protección de dispositivos",
        description:
          "Proteger los dispositivos digitales de amenazas externas es esencial para prevenir ataques cibernéticos que puedan comprometer la información de la empresa. Esta competencia mide la habilidad de los empleados para aplicar prácticas básicas y avanzadas de seguridad en sus dispositivos de trabajo.",
        questions: [
          {
            text: "¿Con qué frecuencia toma medidas básicas para proteger sus dispositivos contra amenazas?",
            name: "basic_device_protection_frequency",
            description:
              "Esta pregunta es importante porque evalúa la frecuencia con la que el empleado toma medidas básicas para proteger sus dispositivos contra amenazas, como virus, malware, y ataques cibernéticos. Esto es crucial para determinar si el empleado tiene las habilidades necesarias para proteger los activos de la empresa y prevenir pérdidas de datos.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan familiarizado está con las prácticas de seguridad avanzada para dispositivos?",
            name: "advanced_device_security_familiarity",
            description:
              "Esta pregunta es importante porque evalúa el conocimiento del empleado sobre las prácticas de seguridad avanzadas para proteger sus dispositivos. Esto es crucial para determinar si el empleado puede aplicar medidas efectivas para prevenir ataques cibernéticos y proteger los activos de la empresa.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan bien puede gestionar herramientas de seguridad para proteger dispositivos digitales en red?",
            name: "network_device_security_management_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para gestionar herramientas de seguridad en la red. Esto es crucial para proteger los dispositivos digitales de la empresa y prevenir posibles ataques cibernéticos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué nivel de experiencia tiene en la implementación de soluciones de seguridad avanzadas?",
            name: "advanced_security_solution_implementation_experience",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para implementar soluciones de seguridad avanzadas, lo que es crucial para proteger los activos de la empresa de ataques cibernéticos y vulnerabilidades. Esto asegura que el empleado puede aplicar medidas efectivas para prevenir pérdidas de datos y mantener la integridad de la información.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál competente es en la protección de infraestructura digital ante amenazas sofisticadas?",
            name: "digital_infrastructure_security_competence",
            description: "",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Protección de datos personales e identidad digital",
        description:
          "Los datos personales y la identidad digital de los empleados son activos sensibles para la empresa. Esta competencia evalúa la capacidad de los empleados para proteger sus datos, evitando filtraciones y preservando la integridad de la información personal y corporativa.",
        questions: [
          {
            text: "¿Qué tanto protege su información personal en plataformas digitales básicas?",
            name: "basic_platform_data_protection",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para proteger su información personal en plataformas digitales comunes, como redes sociales, correos electrónicos y sitios web. Esto es crucial para prevenir la exposición de datos personales y reducir el riesgo de identidad robada o fraudes.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánta precaución toma en la protección de sus datos en redes sociales y plataformas laborales?",
            name: "social_platform_data_protection_precaution",
            description:
              "Esta pregunta es importante porque evalúa la precaución del empleado en la protección de sus datos en redes sociales y plataformas laborales. Esto es crucial para prevenir la exposición de datos personales y reducir el riesgo de identidad robada o fraudes.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad puede identificar riesgos de seguridad relacionados con sus datos?",
            name: "data_security_risk_identification_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar posibles riesgos de seguridad relacionados con sus datos personales. Esto es crucial para prevenir la exposición de información confidencial y proteger la integridad de los datos.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan frecuentemente usa herramientas de encriptación para asegurar sus datos personales?",
            name: "encryption_tool_usage_frequency",
            description:
              "Esta pregunta es importante porque evalúa la frecuencia con la que el empleado utiliza herramientas de encriptación para proteger sus datos personales. Esto es crucial para prevenir la exposición de datos personales y reducir el riesgo de identidad robada o fraudes.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan competente es en establecer sistemas de seguridad para datos personales en entornos complejos?",
            name: "complex_personal_data_security_competence",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para proteger los datos personales en entornos complejos, como redes de alta seguridad o sistemas de información críticos. Esto es crucial para prevenir la exposición de información confidencial y garantizar la integridad de los datos personales.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Protección de la salud y el bienestar",
        description:
          "El uso constante de dispositivos digitales puede afectar la salud de los empleados. Esta competencia mide la conciencia sobre prácticas para reducir la fatiga visual, mejorar la postura y evitar otros efectos negativos, contribuyendo a un ambiente laboral más saludable.",
        questions: [
          {
            text: "¿Con qué frecuencia considera la ergonomía en su uso de dispositivos digitales?",
            name: "ergonomics_consideration_frequency",
            description:
              "Esta pregunta es importante porque evalúa la conciencia del empleado sobre la importancia de la ergonomía en el uso de dispositivos digitales. La ergonomía adecuada puede prevenir lesiones y problemas de salud relacionados con el uso prolongado de dispositivos digitales, como dolor de espalda, problemas de visión y fatiga. Al evaluar esta frecuencia, podemos determinar si el empleado está tomando medidas para proteger su salud y bienestar en el trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tanto aplica prácticas para minimizar el tiempo de pantalla y prevenir fatiga digital?",
            name: "screen_time_management_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para manejar su tiempo de pantalla de manera efectiva, lo que puede ayudar a prevenir la fatiga digital, el estrés y otros problemas de salud relacionados con el uso prolongado de dispositivos digitales. Al evaluar esta habilidad, podemos determinar si el empleado está tomando medidas para proteger su salud y bienestar en el trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan hábil es para reconocer y manejar los efectos de la tecnología en su bienestar?",
            name: "technology_impact_on_wellbeing_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para reconocer y manejar los efectos de la tecnología en su bienestar. Esto es crucial para prevenir la fatiga digital, el estrés y otros problemas de salud relacionados con el uso prolongado de dispositivos digitales.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál frecuentemente incorpora pausas y ejercicios en sus hábitos digitales para mejorar su bienestar?",
            name: "digital_break_incorporation_frequency",
            description:
              "Esta pregunta es importante porque evalúa la frecuencia con la que el empleado toma pausas y realiza ejercicios mientras usa dispositivos digitales. Esto es crucial para prevenir la fatiga visual, el estrés y otros problemas de salud relacionados con el uso prolongado de dispositivos digitales. Al evaluar esta frecuencia, podemos determinar si el empleado está tomando medidas para proteger su salud y bienestar en el trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tanto lidera iniciativas o estrategias en su lugar de trabajo para mejorar la salud digital?",
            name: "digital_health_initiatives_leadership",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar esfuerzos para mejorar la salud digital en el lugar de trabajo. Esto es crucial para fomentar un ambiente laboral saludable, reducir el estrés y la fatiga digital, y mejorar la productividad y el bienestar general de los empleados.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Protección del medio ambiente",
        description:
          "La sostenibilidad digital implica el uso responsable de la tecnología para reducir el impacto ambiental. Esta competencia mide la habilidad de los empleados para adoptar prácticas sostenibles, como minimizar residuos electrónicos o reducir el consumo energético digital.",
        questions: [
          {
            text: "¿Qué tan frecuentemente considera el impacto ambiental en el uso de dispositivos y servicios digitales?",
            name: "environmental_impact_consideration_frequency",
            description:
              "Esta pregunta es importante porque evalúa la conciencia del empleado sobre el impacto ambiental de sus acciones digitales. Al considerar el impacto ambiental, los empleados pueden tomar decisiones más sostenibles, reducir el consumo de energía y minimizar los residuos electrónicos, lo que contribuye a un futuro más sostenible.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tanto se asegura de utilizar recursos digitales de forma eficiente?",
            name: "digital_resources_efficiency_assurance",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para utilizar los recursos digitales de manera eficiente, lo que puede ayudar a reducir el consumo de energía, minimizar el impacto ambiental y mejorar la productividad. Al asegurarse de que los recursos digitales se utilizan de manera eficiente, los empleados pueden contribuir a un entorno laboral más sostenible y eficiente.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué habilidad implementa prácticas sostenibles para reducir el consumo energético digital?",
            name: "sustainable_practices_for_energy_reduction_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para implementar prácticas que reduzcan el consumo de energía relacionado con el uso de dispositivos y servicios digitales. Esto es crucial para minimizar el impacto ambiental negativo de las actividades digitales y contribuir a un futuro más sostenible.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál competente es para minimizar residuos electrónicos en sus prácticas laborales?",
            name: "e_waste_minimization_competence",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para reducir los residuos electrónicos generados en el lugar de trabajo. Esto es crucial para minimizar el impacto ambiental negativo de los residuos electrónicos, que pueden contener sustancias tóxicas y contribuir a la contaminación del medio ambiente. Al evaluar esta competencia, podemos determinar si el empleado está tomando medidas para reducir su huella ecológica y promover una cultura de sostenibilidad en el trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tanto asesora o lidera iniciativas para promover la sostenibilidad digital?",
            name: "digital_sustainability_initiatives_leadership",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar o asesorar esfuerzos para promover la sostenibilidad digital en el lugar de trabajo. Esto es crucial para fomentar una cultura de sostenibilidad, reducir el impacto ambiental negativo de las actividades digitales y mejorar la eficiencia en el uso de recursos. Al evaluar esta capacidad, podemos determinar si el empleado está tomando medidas para promover la sostenibilidad digital y reducir la huella ecológica de la empresa.",
            option_type: "type_2",
          },
        ],
      },
    ],
  },
  {
    id: "solucion_problemas",
    title: "Solución de problemas",
    image: "problems_solutions.webp",
    description:
      "La capacidad de solucionar problemas en entornos digitales es esencial en un mundo laboral donde la tecnología evoluciona constantemente. Esta área evalúa la habilidad de los empleados para resolver problemas técnicos, identificar necesidades y responder con soluciones innovadoras. También mide su capacidad para pensar creativamente y detectar áreas de mejora en sus competencias digitales. Al desarrollar estas habilidades, los empleados pueden adaptarse rápidamente a cambios tecnológicos y proponer soluciones eficientes que impulsen la innovación y la resiliencia de la empresa.",
    sections: [
      {
        title: "Resolución de problemas técnicos",
        description:
          "Resolver problemas técnicos de forma autónoma permite a los empleados ser más eficientes y reducir el tiempo de inactividad. Esta competencia mide la capacidad de los empleados para solucionar problemas técnicos, manteniendo la continuidad y el flujo de trabajo.",
        questions: [
          {
            text: "¿Con qué frecuencia resuelve problemas técnicos básicos sin ayuda?",
            name: "basic_technical_problems_resolution_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para resolver problemas técnicos comunes sin necesidad de asistencia. Esto es crucial para la eficiencia y la productividad en el trabajo, ya que los empleados pueden resolver problemas rápidamente y sin interrupciones, lo que a su vez reduce el tiempo de inactividad y mejora la continuidad del trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan hábil es para solucionar problemas técnicos en plataformas o herramientas estándar?",
            name: "standard_platform_technical_problem_solving_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para solucionar problemas técnicos en plataformas o herramientas estándar. Esto es crucial para mantener la eficiencia y la productividad en el trabajo, ya que los empleados pueden resolver problemas rápidamente y sin interrupciones, lo que a su vez reduce el tiempo de inactividad y mejora la continuidad del trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tanto puede identificar y corregir problemas técnicos complejos en su campo?",
            name: "complex_technical_problems_identification_and_fix",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar y resolver problemas técnicos complejos en su área de especialización. Esto es crucial para garantizar que los empleados puedan manejar desafíos técnicos avanzados de manera efectiva, lo que a su vez puede mejorar la eficiencia, la productividad y la calidad del trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál bien puede anticipar y resolver problemas avanzados en entornos tecnológicos?",
            name: "advanced_technical_problem_anticipation_and_resolution_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para prever y resolver problemas tecnológicos complejos. Esto es crucial para garantizar que los empleados puedan manejar desafíos tecnológicos avanzados de manera efectiva, lo que a su vez puede mejorar la eficiencia, la productividad y la calidad del trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan experto es en el diagnóstico y solución de problemas técnicos en sistemas críticos?",
            name: "expertise_in_diagnosing_and_solving_critical_systems_problems",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar y resolver problemas técnicos en sistemas críticos, como aquellos que afectan la seguridad, la integridad de los datos o la continuidad del negocio. Esto es crucial para garantizar que los sistemas críticos funcionen sin interrupciones y que los empleados puedan manejar situaciones de emergencia de manera efectiva.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Identificación de necesidades y respuestas tecnológicas",
        description:
          "Identificar y responder a necesidades específicas con soluciones tecnológicas mejora la productividad y la calidad del trabajo. Esta competencia evalúa la habilidad para adaptar y proponer herramientas tecnológicas que se ajusten a los requerimientos de la organización.",
        questions: [
          {
            text: "¿Con qué frecuencia identifica soluciones tecnológicas para mejorar procesos básicos?",
            name: "basic_process_technology_solution_identification_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar oportunidades de mejora en los procesos cotidianos y aplicar soluciones tecnológicas para optimizarlos. Esto es crucial para aumentar la eficiencia, reducir costos y mejorar la productividad en el trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan bien adapta tecnologías digitales para responder a necesidades específicas?",
            name: "digital_technologies_adaptation_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptar tecnologías digitales a necesidades específicas. Esto es crucial para garantizar que las soluciones tecnológicas sean efectivas y eficientes, lo que a su vez puede mejorar la productividad y la calidad del trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánta habilidad tiene para recomendar y aplicar nuevas herramientas para resolver necesidades?",
            name: "new_tools_recommendation_and_application_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar y aplicar herramientas tecnológicas innovadoras para resolver problemas y mejorar procesos. Esto es crucial para mantenerse actualizado con las últimas tecnologías y asegurar que la organización se mantiene competitiva en un entorno tecnológico en constante evolución.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan efectivo es en adaptar soluciones complejas a necesidades empresariales específicas?",
            name: "effective_adaptation_of_complex_solutions_to_business_needs",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para adaptar soluciones tecnológicas complejas a las necesidades específicas de la empresa. Esto es crucial para asegurar que las soluciones tecnológicas se ajusten a los objetivos y necesidades de la empresa, lo que a su vez puede mejorar la eficiencia, la productividad y el éxito de la organización.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál experto es en desarrollar estrategias tecnológicas innovadoras que cubran necesidades cambiantes?",
            name: "expertise_in_innovative_technology_strategies_for_dynamic_needs",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para desarrollar soluciones tecnológicas que se ajusten a las necesidades cambiantes de la organización. Esto es crucial para asegurar que la empresa se mantiene competitiva y puede adaptarse a los cambios tecnológicos y de mercado.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Utilización creativa de la tecnología digital",
        description:
          "Usar la tecnología de forma creativa permite innovar en el trabajo diario. Esta competencia mide la capacidad de los empleados para pensar fuera de lo común y aplicar soluciones tecnológicas novedosas, aumentando la eficiencia y aportando valor a la organización.",
        questions: [
          {
            text: "¿Qué tan frecuentemente emplea la tecnología de formas novedosas en tareas básicas?",
            name: "frequent_use_of_technology_in_basic_tasks",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para encontrar formas innovadoras de aplicar la tecnología en tareas cotidianas. Esto es crucial para mejorar la eficiencia, reducir el tiempo de trabajo y aumentar la productividad en el lugar de trabajo.",
            option_type: "type_1",
          },
          {
            text: "¿Cuál bien utiliza herramientas digitales para mejorar procesos creativos?",
            name: "digital_tools_for_creative_processes",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para aplicar herramientas digitales de manera efectiva para mejorar procesos creativos. Esto es crucial para aumentar la eficiencia, la innovación y la calidad en el trabajo, lo que a su vez puede llevar a resultados más efectivos y beneficiosos para la organización.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan hábil es para desarrollar soluciones innovadoras mediante herramientas tecnológicas?",
            name: "innovative_solutions_development_skill",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para crear soluciones novedosas y efectivas utilizando herramientas tecnológicas. Esto es crucial para la innovación y el crecimiento de la organización, ya que permite abordar desafíos y oportunidades de manera creativa y eficiente.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál competente es en la integración de tecnología avanzada para mejorar la creatividad de proyectos?",
            name: "advanced_technology_integration_for_creativity",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para combinar tecnologías avanzadas de manera efectiva para fomentar la creatividad en proyectos. Esto es crucial para impulsar la innovación y el crecimiento dentro de la organización, ya que la integración de tecnologías avanzadas puede llevar a soluciones más efectivas y novedosas.",
            option_type: "type_2",
          },
          {
            text: "¿Cuánto puede liderar la implementación de soluciones tecnológicas disruptivas?",
            name: "leadership_in_disruptive_technology_implementation",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar y implementar soluciones tecnológicas innovadoras y disruptivas. Esto es crucial para la organización, ya que la implementación de tecnologías disruptivas puede llevar a cambios significativos en la forma en que se realizan las tareas y se abordan los desafíos, lo que puede impulsar el crecimiento y la innovación.",
            option_type: "type_2",
          },
        ],
      },
      {
        title: "Identificación de lagunas en la competencia digital",
        description:
          "Reconocer las áreas de mejora en habilidades digitales es el primer paso para el crecimiento personal y profesional. Esta competencia evalúa la capacidad del empleado para identificar carencias en sus habilidades digitales y tomar medidas para mejorar, contribuyendo así a una cultura de aprendizaje y desarrollo continuo.",
        questions: [
          {
            text: "¿Con qué frecuencia identifica áreas de mejora en sus habilidades digitales?",
            name: "digital_skill_improvement_identification_frequency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para reconocer sus debilidades digitales y buscar oportunidades de mejora. Esto es crucial para el crecimiento personal y profesional, ya que la identificación temprana de áreas de mejora permite tomar medidas para desarrollar habilidades digitales más fuertes y estar al día con los avances tecnológicos.",
            option_type: "type_1",
          },
          {
            text: "¿Qué tan bien reconoce brechas en las habilidades digitales de sus compañeros?",
            name: "recognition_of_digital_skill_gaps_in_colleagues",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar las debilidades digitales de sus compañeros de trabajo. Esto es crucial para el crecimiento y el desarrollo del equipo, ya que permite a los empleados apoyarse mutuamente y buscar oportunidades de capacitación y mejora.",
            option_type: "type_2",
          },
          {
            text: "¿Qué tan hábil es en recomendar formaciones para mejorar la competencia digital en su equipo?",
            name: "skill_training_recommendation_for_team",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para identificar las necesidades de capacitación de su equipo y recomendar oportunidades de formación adecuadas para mejorar sus habilidades digitales. Esto es crucial para el crecimiento y el desarrollo del equipo, ya que una formación adecuada puede aumentar la eficiencia, la productividad y la innovación en el trabajo.",
            option_type: "type_2",
          },
          {
            text: "¿Cuál eficiente es para desarrollar estrategias de capacitación digital a nivel organizacional?",
            name: "digital_training_strategy_development_efficiency",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para crear planes de capacitación digital efectivos a escala organizacional. Esto es crucial para asegurar que todos los empleados tengan las habilidades digitales necesarias para realizar sus tareas de manera eficiente y contribuir al éxito de la organización.",
            option_type: "type_2",
          },
          {
            text: "¿Con qué frecuencia lidera y ejecuta programas para reducir brechas digitales complejas?",
            name: "leadership_in_programs_to_reduce_complex_digital_gaps",
            description:
              "Esta pregunta es importante porque evalúa la capacidad del empleado para liderar y ejecutar programas que aborden las brechas digitales más complejas. Esto es crucial para asegurar que la organización está preparada para abordar los desafíos tecnológicos actuales y futuros, y para garantizar que todos los empleados tengan las habilidades digitales necesarias para realizar sus tareas de manera eficiente.",
            option_type: "type_1",
          },
        ],
      },
    ],
  },
];
