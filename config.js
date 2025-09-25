/* MagicMirror² Config
 * Config adaptado a 1024x600
 */

let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/", 
  ipWhitelist: [], // [] permite acceso desde cualquier IP
  useHttps: false,
  httpsPrivateKey: "",
  httpsCertificate: "",

  language: "es",
  locale: "es-AR",
  timeFormat: 24,
  units: "metric",

  modules: [
    // Reloj
    {
      module: "clock",
      position: "top_left"
    },

    // Noticias Argentina
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "La Nación",
            url: "https://www.lanacion.com.ar/rss/cat-1-comprimido.xml"
          },
          {
            title: "Clarín",
            url: "https://www.clarin.com/rss/lo-ultimo/"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },

    // Carrusel del clima (3 ciudades)
    {
      module: "MMM-NOAA3",
      position: "top_right",
      config: {
        apiKey: "8807579cf272149be204c26f51084d06",
        units: "metric",
        showClock: false,
        useHeader: true,
        updateInterval: 10 * 60 * 1000, // cada 10 min
        animationSpeed: 1000,
        rotateCities: true,     // <<< activa el carrusel
        cityList: [
          { lat: "-31.4201", lon: "-64.1888", header: "Córdoba" },
          { lat: "-24.1858", lon: "-65.2995", header: "Jujuy" },
          { lat: "-25.7965", lon: "-64.9642", header: "Rosario de la Frontera" }
        ],
        rotateInterval: 30 * 1000 // cambia ciudad cada 30 seg
      }
    },

    // Promiedos (fútbol argentino)
    {
      module: "MMM-promiedos",
      position: "top_left",
      config: {
        apiUrl: "https://api.promiedos.com.ar/league/tables_and_fixtures/hc",
        refreshHour: 23,    // Hora del día para actualizar (formato 24h)
        refreshMinute: 0,   // Minuto exacto
        animationSpeed: 1000
      }
    },

    // Cámara
    {
      module: "camera",
      position: "middle_center",
      config: {
        device: "/dev/video0", // normalmente la webcam USB
        width: 320,
        height: 240
      }
    }
  ]
};

/*************** NO EDITAR DEBAJO ***************/
if (typeof module !== "undefined") {module.exports = config;}
