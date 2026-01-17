// src/data/projects.js
export const projects = [
  {
    id: "ups",
    title: "Sistema de monitoreo UPS",
    type: "software",
    description:
      "Sistema integrado para monitorear el estado de una UPS a través de su puerto USB y reportar datos en tiempo real a una aplicación web.",
    fullDescription:
      "Este proyecto nació de la necesidad de tener visibilidad sobre el estado de una UPS, tanto en consumo energético como en condiciones de batería. Utilicé una minipc con Linux para comunicarse con la UPS vía USB, extrayendo datos clave y sirviéndolos a una aplicación web desarrollada en React para visualización en tiempo real. El sistema incluye alertas configurables para notificar sobre eventos críticos como fallos de energía o batería baja a través de telegram.",
    specs: [
      { label: "Sistema operativo", value: "Debian 12" },
      { label: "Backend", value: "Python (Flask)" },
      { label: "Frontend", value: "React" },
      { label: "Comunicación", value: "USB (NUT Protocol)" },
      { label: "Notificaciones", value: "Telegram Bot API" },
    ],
    tags: ["Python", "Flask", "React", "NUT", "Telegram API"],
    link: "https://ups.juangonzalez.com.ar",
    repo: "https://github.com/juanchixd/Bot_ups_Lyonn",
    status: "En Producción",
    image:
      "https://github.com/juanchixd/Bot_ups_Lyonn/blob/main/img/graph.png?raw=true",
  },
  {
    id: "weather-station",
    title: "Estación Meteorológica DIY",
    type: "hardware-software",
    description:
      "Estación meteorológica casera que mide temperatura, humedad y presión, enviando datos a una base de datos en un servidor local para análisis y visualización.",
    fullDescription:
      "Construí una estación meteorológica utilizando un microcontrolador ESP8266-01 conectado a sensores de temperatura, humedad y presión. El dispositivo recopila datos ambientales y los envía cada 10 minutos a un servidor local mediante Wi-Fi. En el servidor, desarrollé una aplicación web para almacenar, analizar y visualizar los datos históricos, permitiendo identificar tendencias climáticas locales.",
    specs: [
      { label: "Microcontrolador", value: "ESP8266-01" },
      { label: "Sensores", value: "HTU21D, BMP280" },
      { label: "Comunicación", value: "Wi-Fi (HTTP)" },
      { label: "Backend", value: "Python (Flask)" },
      { label: "Base de datos", value: "SQLite" },
      { label: "Frontend", value: "Python (Flask)" },
    ],
    tags: ["ESP8266", "HTU21D", "BMP280", "Flask", "SQLite"],
    link: "https://weather.juangonzalez.com.ar",
    repo: "#",
    status: "En Producción",
    image: "https://placehold.co/600x400/1e1e1e/00ff9d?text=Weather+Station",
  },
  {
    id: "personal-web",
    title: "Personal Web V2",
    type: "software",
    description:
      "Portafolio personal de alto rendimiento construido con arquitectura de Islas. Diseño UI enfocado en ingeniería híbrida.",
    fullDescription:
      "Busqué crear una identidad digital que reflejara mis dos facetas: mecánica y código. Utilicé Astro por su rendimiento y la capacidad de hidratar componentes de React solo cuando es necesario.",
    specs: [
      { label: "Framework", value: "Astro" },
      { label: "UI", value: "Tailwind CSS + React" },
      { label: "Hosting", value: "Vercel" },
      { label: "Score", value: "100/100 Lighthouse" },
    ],
    tags: ["Astro", "React", "Tailwind", "Vercel"],
    link: "https://juangonzalez.com.ar",
    repo: "https://github.com/juanchixd/personal-web-v2",
    status: "En Desarrollo",
    image: "https://placehold.co/600x400/1e1e1e/00ff9d?text=Web+Architecture",
  },
  {
    id: "erp-system",
    title: "Sistema ERP",
    type: "software",
    description:
      "Sistema ERP modular para pequeñas empresas, integrando gestión de inventarios, ventas, compras, B2B y reportes financieros.",
    fullDescription:
      "Desarrollé un sistema ERP modular utilizando FastApi para el backend y React para el frontend. El sistema permite a las pequeñas empresas gestionar inventarios, ventas, compras y generar reportes financieros detallados. Implementé autenticación basada en roles para asegurar que los usuarios solo accedan a las funcionalidades pertinentes a sus responsabilidades. El sistema está diseñado para ser escalable y adaptable a diferentes tipos de negocios. Además, integré funcionalidades de B2B para crear un marketplace interno para venta a otras empresas. Tambien implemente un sistema de turnero para optimizar la atención al cliente con avisos por Whatsapp, tanto de confirmacion como de recordatorio.",
    specs: [
      { label: "Backend", value: "Python (FastApi)" },
      { label: "Frontend", value: "React" },
      { label: "Base de datos", value: "PostgreSQL" },
      { label: "Autenticación", value: "JWT" },
      { label: "Hosting", value: "Local" },
    ],
    tags: ["FastApi", "React", "PostgreSQL", "JWT"],
    status: "En Desarrollo",
    link: "#",
    repo: "#",
    image: "https://placehold.co/600x400/1e1e1e/00ff9d?text=ERP+System",
  },
];
