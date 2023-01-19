<template>
    <div class="layout-landing-company">
        <TheHeaderHome 
            :small_title="landingCompanyData.blockHeader.smallTitle"
            :big_title="landingCompanyData.blockHeader.bigTitle"
            :big_title_alt="landingCompanyData.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="landingCompanyData.blockHeader.text"
            :image_top="landingCompanyData.blockHeader.imageTop"
            :image_bottom="landingCompanyData.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="true"
            :share="true"
            :list="landingCompanyData.blockHeader.list"
            :cta="landingCompanyData.blockHeader.cta"
        />
        
        <TheSectionTwocols
            :title="landingCompanyData.blockOurApproach.title"
            :subtitle="landingCompanyData.blockOurApproach.subTitle"
            :text="landingCompanyData.blockOurApproach.description"
            :image="landingCompanyData.blockOurApproach.image"
            :is_image_left="true"
            :background="false"
        />
        
        <TheSectionListGoals
            :title="$t('pagelandingcompany.section_goals_one.title')"
            :goals="landingCompanyData.blockBenefits.benefits"
            :background="true"
        />
       
        <TheSectionListGoals
            :title="$t('pagelandingcompany.section_goals_two.title')"
            :goals="landingCompanyData.blockOffers.offers"
        />

        <TheSectionListFeaturesAlt
            :title="$t('pagelandingcompany.section_feature.title')"
            :features="landingCompanyData.blockFeatures.features"
            :background="true"
        />
         
        <TheSectionPartners 
            :title="landingCompanyData.blockPartners.title"
            :partners="landingCompanyData.blockPartners.partners"
        />
        
        <TheSectionTestimonial 
            :title="landingCompanyData.blockTestimonials.title"
            :slides="landingCompanyData.blockTestimonials.testimonials"
            :cta="landingCompanyData.blockTestimonials.cta"
        />

        <TheSectionListNews
            :title="$t('pagelandingcompany.section_news.title')"
            :news="landingCompanyData.blockNews.news"
            :cta="{'title': $t('pagelandingcompany.section_news.cta_title'), 'url': $t('pagelandingcompany.section_news.cta_url')}"
            :hook_title="$t('pagelandingcompany.section_news.hook')"
            :hook_image="{'url':'/img_hook_news.png', 'alt':'#'}"
            :hook_cta_first="{'title': $t('pagelandingcompany.section_news.cta_first_text'), 'url': $t('pagelandingcompany.section_news.cta_first_url')}"
            :hook_cta_second="{'title': $t('pagelandingcompany.section_news.cta_second_text'), 'url': $t('pagelandingcompany.section_news.cta_second_url')}"
        />    
    </div>
</template>

<script>
import TheHeaderHome from '../../components/header/TheHeaderHome.vue';
import TheSectionTwocols from '../../components/section/TheSectionTwocols.vue';
import TheSectionListNews from '../../components/section/TheSectionListNews.vue';
import TheSectionPartners from '../../components/section/TheSectionPartners.vue';
import TheSectionListGoals from '../../components/section/TheSectionListGoals.vue';
import TheSectionListFeaturesAlt from '../../components/section/TheSectionListFeaturesAlt.vue';
import TheSectionTestimonial from '../../components/section/TheSectionTestimonial.vue';

export default {
    name: "LandingCompanyPage",
    components: {
        TheHeaderHome,
        TheSectionTwocols,
        TheSectionListNews,
        TheSectionPartners,
        TheSectionListGoals,
        TheSectionListFeaturesAlt,
        TheSectionTestimonial,
    },
    async asyncData({app, params, $axios, $config: { baseURL } }) {
        // const landingCompanyData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/landing-company`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });
        const landingCompanyData = {
    "seo": {
        "title": "string",
        "description": "string"
    },
    "blockHeader": {
        "smallTitle": "Nyota FR",
        "bigTitle": "Vous êtes une",
        "bigTitleAlt": "entreprise",
        "text": "Et vous recherchez",
        "list": [
            {
                "text": "test"
            },
            {
                "text": "test"
            },
            {
                "text": "test"
            }
        ],
        "cta": {
            "url": "#",
            "title": "Nous contacter"
        },
        "imageTop": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        },
        "imageBottom": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        }
    },
    "blockOurApproach": {
        "title": "Notre démarche",
        "description": "<p>Imaginez une bibliothèque où tous les livres auraient été sélectionnés avec soin avec l’ambition de réunir les meilleurs ouvrages pour les proposer aux meilleurs lecteurs. Vous l’aurez compris ; chez Nyota, on est friands d’analogies, mais pas que. Comme le bibliothécaire invétéré de notre petite histoire, ce qui nous intéresse par-dessus tout est de réunir les talents les plus prometteurs quel que soit leur domaine de compétences, leurs années d’expériences et leur adresse actuelle. Un seul critère: avoir un intérêt pour l’Afrique et vouloir contribuer à son rayonnement.</p><p>Depuis plus d’un an, nous recueillons les meilleurs profils qu’ils soient seniors ou tout juste sortis d’étude pour les proposer à des entreprises avec lesquelles ils partagent la même vision. Avec plus de 2000 CV dans notre base, nous sommes la première CVthèque pensée exclusivement pour répondre aux spécificités du marché africain.</p>",
        "image": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        }
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
    "blockBenefits": {
        "benefits": [
            {
                "icon": {
                    "url": "/icon-bubbles.png",
                    "alt": "string"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie."
            },
            {
                "icon": {
                    "url": "/icon-bubbles.png",
                    "alt": "string"
                },
                "title": "Mettre en valeur les talents de demain",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie."
            },
            {
                "icon": {
                    "url": "/icon-bubbles.png",
                    "alt": "string"
                },
                "title": "Contribuer à l’essor du continent",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie."
            }
        ]
    },
    "blockOffers": {
        "offers": [
            {
                "cta": {
                    "url": "a",
                    "title": "Nous contacter"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie.",
                "price": ""
            },
            {
                "cta": {
                    "url": "a",
                    "title": "Nous contacter"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie.",
                "price": ""
            },
            {
                "cta": {
                    "url": "a",
                    "title": "Nous contacter"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie.",
                "price": ""
            }
        ]
    },
    "blockFeatures": {
        "title": "Les plus de Nyota",
        "features": [
            {
                "title": "Recrutez facilement de nouveaux talents",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis."
            },
            {
                "title": "Recrutez facilement de nouveaux talents",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis."
            },
            {
                "title": "Recrutez facilement de nouveaux talents",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis."
            }
        ]
    },
    "blockTestimonials": {
        "title": "Les plus de Nyota",
        "testimonials": [
            {
                "quote": "Gràce à Nyota, j’ai rapidement trouvé mon premier emploi dans une entreprise prestigieuse à Johannesburg. Je suis très satisfait de mon expérience avec eux et je recommande à toute personne voulant étudier ou travailler en Afrique de faire appel à Nyota.",
                "image": {
                    "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt": "alt"
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
                    "url":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt":"alt"
                },
                "firstname": "Charles",
                "lastname": "Billet", 
                "role": "Sciences Po Paris"
            }
        ],
        "cta": {
            "url": "#a",
            "title": "S'inscrire"
        }
    }
}

        return { landingCompanyData }
    }
}
</script>
<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .layout-landing-company {
      overflow-x: hidden;
    }
</style>

