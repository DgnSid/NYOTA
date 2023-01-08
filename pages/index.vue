<template>
    <div class="layout-home">
        <TheHeaderHome 
            :small_title="homeData.blockHeader.smallTitle"
            :big_title="homeData.blockHeader.bigTitle"
            :text="homeData.blockHeader.text"
            :image_top="homeData.blockHeader.imageTop"
            :image_bottom="homeData.blockHeader.imageBottom"
            :cta_left="homeData.blockHeader.ctaLeft"
            :cta_right="homeData.blockHeader.ctaRight"
            :ellipse="true"
            :bulb="true"
            :logo="true"
            :big="true"
        />
        <TheSectionPartners 
            :title="homeData.blockPartners.title"
            :partners="homeData.blockPartners.partners"
            :ellipse="true"
        />
        <TheSectionListFeatures 
            :title="homeData.blockFeatures.title"
            :image="homeData.blockFeatures.image"
            :cta="homeData.blockFeatures.cta"
            :features="homeData.blockFeatures.features"
        />
        <div class="p-r">
          <shape-ellipse class="c-section-listfeatures-ellipse" :size="140" />
          <TheSectionListFormulas
              :title="homeData.blockFormulas.title"
              :formulas="homeData.blockFormulas.formulas"
          />
        </div>
        <TheSectionFigures 
            :title="$t('section_figures_title')"
            :key_numbers="homeData.blockKeyNumbers.keyNumbers"
        />
        <div class="p-r">
          <shape-ellipse class="c-section-testimonial-ellipse" :size="300" />
          <TheSectionTestimonial 
              :title="homeData.blockTestimonials.title"
              :slides="homeData.blockTestimonials.testimonials"
              :cta="homeData.blockTestimonials.cta"
          />
        </div>
        <TheSectionListNews
            title="Découvrez nos actualités"
            :news="homeData.blockNews.news"
            :cta="{'title': 'Voir toutes les actualités', 'url': '#'}"
            :logo="false"
        />
    </div>
</template>

<script>
import TheHeaderHome from '../components/header/TheHeaderHome.vue';
import TheSectionPartners from '../components/section/TheSectionPartners.vue';
import TheSectionListFeatures from '../components/section/TheSectionListFeatures.vue';
import TheSectionListFormulas from '../components/section/TheSectionListFormulas.vue';
import TheSectionFigures from '../components/section/TheSectionFigures.vue';
import TheSectionTestimonial from '../components/section/TheSectionTestimonial.vue';
import TheSectionListNews from '../components/section/TheSectionListNews.vue';
import ShapeEllipse from '../components/ui/ShapeEllipse';

export default {
    name: "IndexPage",
    components: { 
        TheHeaderHome, 
        TheSectionPartners, 
        TheSectionListFeatures, 
        TheSectionListFormulas,
        TheSectionFigures,
        TheSectionTestimonial,
        TheSectionListNews,
        ShapeEllipse,
    },
    async asyncData({app, params, $axios, $config: { baseURL } }) {
        
        // const homeData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/homepage`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const homeData = {
  "seo": {
    "title": "string",
    "description": "string"
  },
  "blockHeader": {
    "smallTitle": "Arrêtez de postuler,",
    "bigTitle": "faites-vous recruter ! FR",
    "bigTitleAlt": "",
    "text": "Nyota, c’est l’avenir du recrutement <span>en Afrique</span>. Chez nous, les rôles sont inversés : déposez votre CV, et laissez les recruteurs venir à vous !",
    "imageTop": {
      "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "alt": "alt à définir"
    },
    "imageBottom": {
      "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "alt": "alt à définir"
    },
    "ctaLeft": {
      "title": "Je suis un talent",
      "url": "https://www.adveris.fr/"
    },
    "ctaRight": {
      "title": "Je recrute",
      "url": "https://www.adveris.fr/"
    }
  },
  "blockPartners": {
    "title": "Les partenaires qui nous font confiance et qui recrutent avec Nyota",
    "partners": [
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à définir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      },
      {
        "image": {
          "url": "/la-maison-afrique-logo.png",
          "alt": "alt à défnir"
        },
        "url": "https://www.adveris.fr/"
      }
    ]
  },
  "blockFeatures": {
    "title": "Avec Nyota, l’Afrique à portée de job",
    "image": {
      "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "alt": "Alt à définir"
    },
    "cta": {
      "title": "Je recrute",
      "url": "https://www.adveris.fr/"
    },
    "features": [
      {
        "title": "Nos partenariats",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "url": "#"
      },
      {
        "title": "Nos partenariats",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "url": "#"
      },
      {
        "title": "Nos partenariats",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "url": "#"
      }
    ]
  },
  "blockFormulas": {
    "title": "Dénichez les meilleurs talents grâce à des formules adaptées à vos besoins",
    "formulas": [
      {
        "title": "Petites entreprises",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "cta": {
            "url":"#",
            "title": "En savoir plus"
        }
      },
      {
        "title": "Moyennes entreprises",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "cta": {
            "url":"#",
            "title": "En savoir plus"
        }
      },
      {
        "title": "Grandes entreprises",
        "description": "Nous permettent de valoriser votre profil auprès des entreprises du continent qui vous correspondent le plus",
        "cta": {
            "url":"#",
            "title": "En savoir plus"
        }
      }
    ]
  },
  "blockKeyNumbers": {
    "keyNumbers": [
      {
        "number": 10,
        "description": "string"
      },
      {
        "number": 12,
        "description": "string"
      },
      {
        "number": 10,
        "description": "string"
      },
      {
        "number": 5,
        "description": "string"
      }
    ]
  },
  "blockQuotes": {
    "title": "string",
    "quotes": [
      {
        "quote": "string",
        "photo": {
          "url": "string",
          "alt": "string"
        },
        "job": "string",
        "name": "string"
      }
    ]
  },
  "blockNews": {
    "news": [
      {
        "title": "string 1",
        "url": "#",
        "publicationDate": "2022-11-16T16:35:49.556Z",
        "image": {
          "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          "alt": "A définir"
        }
      },
      {
        "title": "string 2",
        "url": "#",
        "publicationDate": "2022-11-16T16:35:49.556Z",
        "image": {
          "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          "alt": "A définir"
        }
      },
      {
        "title": "string 3",
        "url": "#",
        "publicationDate": "2022-11-16T16:35:49.556Z",
        "image": {
          "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          "alt": "A définir"
        }
      },
      {
        "title": "string 4",
        "url": "#",
        "publicationDate": "2022-11-16T16:35:49.556Z",
        "image": {
          "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          "alt": "A définir"
        }
      }
    ]
  },
    "blockTestimonials": {
        "title": "Parce que ceux qui en parlent le mieux, c’est vous!",
        "cta": {
            "title": "S'inscrire",
            "url": "#"
        },
        "testimonials": [
            {
                "quote": "Gràce à Nyota, j’ai rapidement trouvé mon premier emploi dans une entreprise prestigieuse à Johannesburg. Je suis très satisfait de mon expérience avec eux et je recommande à toute personne voulant étudier ou travailler en Afrique de faire appel à Nyota.",
                "image": {
                    "url":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt":"alt"
                },
                "firstname": "Charles",
                "lastname": "Billet",
                "role": "Sciences Po Paris"
            },
            {
                "quote": "Gràce à Nyota, j’ai rapidement trouvé mon premier emploi dans une entreprise prestigieuse à Johannesburg. Je suis très satisfait de mon expérience avec eux et je recommande à toute personne voulant étudier ou travailler en Afrique de faire appel à Nyota.",
                "image": {
                    "url":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt":"alt"
                },
                "firstname": "Charles",
                "lastname": "Billet",
                "role": "Sciences Po Paris"
            },
            {
                "quote": "Gràce à Nyota, j’ai rapidement trouvé mon premier emploi dans une entreprise prestigieuse à Johannesburg. Je suis très satisfait de mon expérience avec eux et je recommande à toute personne voulant étudier ou travailler en Afrique de faire appel à Nyota.",
                "image": {
                    "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt": "alt"
                },
                "firstname": "Charles",
                "lastname": "Billet",
                "role": "Sciences Po Paris"
            }
        ]
    }
}

        return { homeData }
    }
}
</script>
<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .layout-home {
      overflow-x: hidden;
    }
    .c-section-listfeatures-ellipse {
      position: absolute;
      left: -50px;
      top: 45px;
    }

    .c-section-testimonial-ellipse {
      position: absolute;
      z-index: 2;
      bottom: 0;
      transform: translate(-50%, 50%);
    }
</style>
