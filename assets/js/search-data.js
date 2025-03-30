// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

ninja.data = [{
    id: "nav-ciamer",
    title: "CIAMER",
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
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
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
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },// Servicios collection{
      id: "service-biopsia",
      title: "Biopsia",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/biopsia/";
      },
    },{
      id: "service-densitometría-ósea",
      title: "Densitometría Ósea",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/densitometria/";
      },
    },{
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
        window.location.href = "/services/mamografia/";
      },
    },{
      id: "service-punciones",
      title: "Punciones",
      description: "",
      section: "Servicios",
      handler: () => {
        window.location.href = "/services/punciones/";
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
      id: "service-ultrasonido-dermatológico",
      title: "Ultrasonido Dermatológico",
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
      description: "",
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
