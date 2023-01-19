<template>
    <div class="layout-landing-talent">
        <TheHeaderHome 
            :small_title="landingTalentData.blockHeader.smallTitle"
            :big_title="landingTalentData.blockHeader.bigTitle"
            :big_title_alt="landingTalentData.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="landingTalentData.blockHeader.text"
            :image_top="landingTalentData.blockHeader.imageTop"
            :image_bottom="landingTalentData.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="true"
            :list="landingTalentData.blockHeader.list"
            :cta="landingTalentData.blockHeader.cta"
            :share="true"
        />
        <TheSectionTwocols
            :title="landingTalentData.blockRecipe.title"
            :subtitle="landingTalentData.blockRecipe.subTitle"
            :text="landingTalentData.blockRecipe.description"
            :image="landingTalentData.blockRecipe.image"
            :is_image_left="true"
        />
        <TheSectionListGoals
            :title="$t('pagelandingtalent.section_goals_one.title')"
            :goals="landingTalentData.blockBenefits.benefits"
            :background="true"
        />
        <TheSectionListFeaturesAlt
            :title="$t('pagelandingtalent.section_goals_two.title')"
            :features="landingTalentData.blockFeatures.features"
            :background="false"
        />
        <TheSectionTestimonial 
            :title="landingTalentData.blockTestimonials.title"
            :slides="landingTalentData.blockTestimonials.testimonials"
            :cta="landingTalentData.blockTestimonials.cta"
        />

        <TheSectionListNews
            :title="$t('pagelandingtalent.section_news.title')"
            :news="landingTalentData.blockNews.news"
            :cta="{'title': $t('pagelandingtalent.section_news.cta_title'), 'url': $t('pagelandingtalent.section_news.cta_url')}"
            :hook_title="$t('pagelandingtalent.section_news.hook')"
            :hook_image="{'url':'/img_hook_news.png', 'alt':'#'}"
            :hook_cta_first="{'title': $t('pagelandingtalent.section_news.cta_first_text'), 'url': $t('pagelandingtalent.section_news.cta_first_url')}"
            :hook_cta_second="{'title': $t('pagelandingtalent.section_news.cta_second_text'), 'url': $t('pagelandingtalent.section_news.cta_second_url')}"
        />
    </div>
</template>

<script>
import TheHeaderHome from '../../components/header/TheHeaderHome.vue';
import TheSectionTwocols from '../../components/section/TheSectionTwocols.vue';
import TheSectionListNews from '../../components/section/TheSectionListNews.vue';
import TheSectionListGoals from '../../components/section/TheSectionListGoals.vue';
import TheSectionListFeaturesAlt from '../../components/section/TheSectionListFeaturesAlt.vue';
import TheSectionTestimonial from '../../components/section/TheSectionTestimonial.vue';

export default {
    name: "LandingTalentPage",
    components: {
        TheHeaderHome,
        TheSectionTwocols,
        TheSectionListNews,
        TheSectionListGoals,
        TheSectionListFeaturesAlt,
        TheSectionTestimonial,
    },
    async asyncData({app, params, $axios, $config: { baseURL } }) {
        // const landingTalentData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/landing-talent`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const landingTalentData = {
    "seo": {
        "title": "string",
        "description": "string"
    },
    "blockHeader": {
        "smallTitle": "Nyota FR",
        "bigTitle": "Vous êtes un",
        "bigTitleAlt": "talent",
        "text": "Nyota est là pour vous :",
        "imageTop": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        },
        "imageBottom": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        },
        "cta": {
            "title": "Nous contacter",
            "url": "#"
        },
        "list": [
            {
                "text": "Un stage pour vivre une nouvelle expérience "
            },
            {
                "text": "Un stage pour vivre une nouvelle expérience "
            },
            {
                "text": "Un stage pour vivre une nouvelle expérience "
            }
        ]
    },
    "blockRecipe": {
        "title": "La recette Nyota",
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
                "price": "1200 $"
            },
            {
                "cta": {
                    "url": "a",
                    "title": "Nous contacter"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie.",
                "price": "1200 $"
            },
            {
                "cta": {
                    "url": "a",
                    "title": "Nous contacter"
                },
                "title": "Faciliter le recrutement en Afrique",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing gravida tortor nibh donec vitae platea sagittis, vitae. Molestie.",
                "price": "1200 $"
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

        return { landingTalentData }
    }
}
</script>
<style lang="scss" scoped>
    .layout-landing-talent {
        overflow-x: hidden;
    }
</style>