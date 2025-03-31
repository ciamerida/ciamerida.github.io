// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-nosotros",
          title: "Nosotros",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nosotros/";
          },
        },{id: "nav-contacto",
          title: "Contacto",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacto/";
          },
        },{id: "nav-servicios",
          title: "Servicios",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/servicios/";
          },
        },{id: "dropdown-nuestro-equipo",
              title: "Nuestro Equipo",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/nuestro-equipo/";
              },
            },{id: "dropdown-trabaja-con-nosotros",
              title: "Trabaja con Nosotros",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/trabaja-con-nosotros/";
              },
            },// Servicios collection{
      id: "service-doppler-testicular",
      title: "Doppler Testicular",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/doppler_1_testicular/";
      },
    },{
      id: "service-doppler-de-cuello",
      title: "Doppler de Cuello",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/doppler_2_cuello/";
      },
    },{
      id: "service-doppler-carotídeo-vertebral",
      title: "Doppler Carotídeo - Vertebral",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/doppler_3_carotideo_vertebral/";
      },
    },{
      id: "service-doppler-abdominal",
      title: "Doppler Abdominal",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/doppler_4_abdominal/";
      },
    },{
      id: "service-doppler-vascular-periférico",
      title: "Doppler Vascular Periférico",
      description: "Arterial y Venoso",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/doppler_4_vascular/";
      },
    },{
      id: "service-mamografía-digital",
      title: "Mamografía Digital",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/especializados_1_mamografia/";
      },
    },{
      id: "service-densitometría-ósea",
      title: "Densitometría Ósea",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/especializados_2_densitometria/";
      },
    },{
      id: "service-radiografías",
      title: "Radiografías",
      description: "Muy pronto!",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/especializados_3_radiografias/";
      },
    },{
      id: "service-biopsia",
      title: "Biopsia",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/intervencionista_1_biopsia/";
      },
    },{
      id: "service-punciones",
      title: "Punciones",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/intervencionista_2_punciones/";
      },
    },{
      id: "service-ultrasonido-transfontanelar",
      title: "Ultrasonido Transfontanelar",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_10_transfontanelar/";
      },
    },{
      id: "service-ultrasonido-dermatológico",
      title: "Ultrasonido Dermatológico",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_11_dermatologico/";
      },
    },{
      id: "service-ultrasonido-pediátrico",
      title: "Ultrasonido Pediátrico",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_12_pediatrico/";
      },
    },{
      id: "service-ultrasonido-abdominal",
      title: "Ultrasonido Abdominal",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_1_abdominal/";
      },
    },{
      id: "service-ultrasonido-pélvico",
      title: "Ultrasonido Pélvico",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_2_pelvico/";
      },
    },{
      id: "service-ultrasonido-renal",
      title: "Ultrasonido Renal",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_3_renal/";
      },
    },{
      id: "service-ultrasonido-vesical",
      title: "Ultrasonido Vesical",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_4_vesical/";
      },
    },{
      id: "service-ultrasonido-mamario",
      title: "Ultrasonido Mamario",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_5_mamario/";
      },
    },{
      id: "service-ultrasonido-músculo-esquelético",
      title: "Ultrasonido Músculo esquelético",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_6_musculoesqueletico/";
      },
    },{
      id: "service-ultrasonido-partes-blandas",
      title: "Ultrasonido Partes Blandas",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_7_partesblandas/";
      },
    },{
      id: "service-ultrasonido-ginecológico",
      title: "Ultrasonido Ginecológico",
      description: "Suprapúbico y Transvaginal",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_8_ginecologico/";
      },
    },{
      id: "service-ultrasonido-prostático",
      title: "Ultrasonido Prostático",
      description: "Suprapúbico y Transrectal",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/ultrasonido_9_prost%C3%A1tico/";
      },
    },// Other collections (except posts and services){id: "news-15-anos-de-ciamer",
          title: '15 anos de CIAMER',
          description: "",
          section: "News",
          handler: () => {
            window.location.href = "/news/15_anos/";
          },
        },{id: "news-caminata-rosa-2024",
          title: 'Caminata_rosa_2024',
          description: "",
          section: "News",
          handler: () => {
            window.location.href = "/news/caminata_rosa_2024/";
          },
        },{id: "news-marzo-2024",
          title: 'Marzo_2024',
          description: "",
          section: "News",
          handler: () => {
            window.location.href = "/news/Marzo_2024/";
          },
        },// Socials{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%69%61%6D%65%72_%62@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ciamerida", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/584121269902", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://maps.app.goo.gl/g5qtdbaa2NZ8N2Q37", "_blank");
        },
      },// Theme toggle{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
