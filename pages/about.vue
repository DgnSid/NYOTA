<template>
    <div class="layout-about">
        <TheHeaderHome 
            :small_title="aboutData.blockHeader.smallTitle"
            :big_title="aboutData.blockHeader.bigTitle"
            :big_title_alt="aboutData.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="aboutData.blockHeader.text"
            :image_top="aboutData.blockHeader.imageTop"
            :image_bottom="aboutData.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="false"
        />
        <div class="p-r">
            <TheSectionTwocols
                :title="aboutData.blockAboutUs.title"
                :subtitle="aboutData.blockAboutUs.subTitle"
                :text="aboutData.blockAboutUs.description"
                :image="aboutData.blockAboutUs.image"
                :is_image_left="true"
                :background="false"
            />
            <shape-ellipse :size="148" class="c-about-ellipse-whoweare"/>
        </div>
        <div class="p-r">
            <TheSectionTwocols
                :title="aboutData.blockFuture.title"
                :subtitle="aboutData.blockFuture.subTitle"
                :text="aboutData.blockFuture.description"
                :image="aboutData.blockFuture.image"
                :is_image_left="false"
                :background="true"
            />
            <shape-ellipse :size="292" class="c-about-ellipse-future"/>
        </div>
        <TheSectionListGoals
            title="Nos objectifs"
            :goals="aboutData.blockGoals.goals"
        />
        <TheSectionPodcast
            :title="aboutData.blockPodcast.title"
            :image="aboutData.blockPodcast.image"
            :text="aboutData.blockPodcast.description"
            :cta="{'title':`S'inscrire sur notre plateforme`, 'url':'#'}"
        />
        <TheSectionListNews
            title="Découvrez nos actualités"
            :news="aboutData.blockNews.news"
            :cta="{'title': 'Voir toutes les actualités', 'url': '#'}"
            hook_title="Vous êtes<br>intéréssés ?"
            :hook_image="{'url':'/img_hook_news.png', 'alt':'#'}"
            :hook_cta_first="{'title':'JE SUIS UN TALENT', 'url':'#'}"
            :hook_cta_second="{'title':'Découvrir nos offres', 'url':'#'}"
        />
    </div>
</template>

<script>
import TheHeaderHome from '../components/header/TheHeaderHome.vue';
import TheSectionListNews from '../components/section/TheSectionListNews.vue';
import TheSectionTwocols from '../components/section/TheSectionTwocols.vue';
import TheSectionListGoals from '../components/section/TheSectionListGoals.vue';
import TheSectionPodcast from '../components/section/TheSectionPodcast.vue';

import ShapeEllipse from '../components/ui/ShapeEllipse';

export default {
    name: "AboutPage",
    components: {
        TheSectionTwocols,
        TheHeaderHome,
        TheSectionListNews,
        TheSectionListGoals,
        TheSectionPodcast,
        ShapeEllipse,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        // const aboutData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/aboutpage`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const aboutData = {
    "seo": {
        "title": "string",
        "description": "string"
    },
    "blockHeader": {
        "smallTitle": "A propos FR",
        "bigTitle": "Nyota,<br> la première plateforme<br> qui met en relation",
        "bigTitleAlt": "l’Afrique et les talents venus de tout horizon",
        "text": "Spécialistes du recrutement, nous œuvrons à satisfaire les talents et les entreprises.",
        "imageTop": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        },
        "imageBottom": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        }
    },
    "blockAboutUs": {
        "title": "Qui sommes-nous ?",
        "subTitle": "La première bibliothèque de CV pour l’Afrique",
        "description": "<p>Imaginez une bibliothèque où tous les livres auraient été sélectionnés avec soin avec l’ambition de réunir les meilleurs ouvrages pour les proposer aux meilleurs lecteurs. Vous l’aurez compris ; chez Nyota, on est friands d’analogies, mais pas que. Comme le bibliothécaire invétéré de notre petite histoire, ce qui nous intéresse par-dessus tout est de réunir les talents les plus prometteurs quel que soit leur domaine de compétences, leurs années d’expériences et leur adresse actuelle. Un seul critère: avoir un intérêt pour l’Afrique et vouloir contribuer à son rayonnement.</p><p>Depuis plus d’un an, nous recueillons les meilleurs profils qu’ils soient seniors ou tout juste sortis d’étude pour les proposer à des entreprises avec lesquelles ils partagent la même vision. Avec plus de 2000 CV dans notre base, nous sommes la première CVthèque pensée exclusivement pour répondre aux spécificités du marché africain.</p>",
        "image": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        }
    },
    "blockFuture": {
        "title": "L’avenir de l’Afrique, c’est vous !",
        "description": "<p>Chez Nyota, tout a commencé avec beaucoup de questions et une seule certitude : l’avenir du continent, c’est vous! Les entreprises recrutent et les opportunités se multiplient. Pourtant, la plupart d’entres-nous, qu’ils soient déjà sur le continent ou encore à l’étranger n’ont aucune idée de la façon d’accéder à ce nouveau champ des possibles. </p><p>C’est en partant de ce constat que l’idée de Nyota est née : mettre en valeur les profils de talents venus du monde entier auprès des meilleures entreprises qui travaillent en lien avec le continent, qu’elles soient basées en Afrique ou ailleurs. Notre ambition est de composer un annuaire de profils qualifiés et motivés pour les présenter aux recruteurs avec lesquels ils partagent des valeurs communes. </p><p>Chaque nouvelle recrue qui rejoint notre réseau est pour nous une « nyota », ce qui signifie étoile en swahili et notre mission est de contribuer à ce qu’elle brille auprès des bonnes personnes. Que ce soit une start’up, une ONG, ou un groupe plus connu, nos équipes prennent à cœur d’étudier votre profil, d’échanger avec vous et de comprendre vos ambitions et vos aspirations pour réaliser le match parfait avec la boîte de vos rêves. </p><p>Adieu les CVs envoyés sans réponse, l’incertitude de la recherche et la désillusion du marché du travail. Avec Nyota, déposez votre CV, on s’occupe de tout!</p>",
        "image": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "alt à définir"
        }
    },
    "blockGoals": {
        "goals": [
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
    "blockPodcast": {
        "title": "Quid de nos articles, nos podcasts et nos interviews?",
        "image": {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "alt": "string"
        },
        "description": "<p>Cela ne vous aura pas échappé, chez Nyota, nous avons à cœur de vous faire connaître le continent et les merveilleuses opportunités dont il regorge. Pour ce faire, notre équipe de rédacteurs, de podcasteurs et de maraudeurs parcourent l’Afrique pour vous en parler et vous la faire aimer.</p><p>Alors pour les chanceux qui travaillent déjà sur place et ceux qui sont à l'affût d'opportunités, pour les ambitieux qui s’y intéresse en espérant pouvoir y aller un jour, et ceux qui sont bien dans leurs postes, pour les connaisseurs qui entretiennent des liens forts avec le continent et ceux n’y ont jamais mis les pieds, et pour les curieux bien renseignés et les curieux qui le seront bientôt, notre contenu est fait pour vous!</p><p><b>Rejoindre l’aventure ?</b></p>"
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
    }
}

        return { aboutData }
    }
}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .layout-about {
        overflow-x: hidden;
    }
    .c-about-ellipse-whoweare {
        position: absolute;
        bottom: 0;
        right: -50px;
        transform: translateY(50%);
        z-index: 2;
    }

    .c-about-ellipse-future {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
    }
</style>
