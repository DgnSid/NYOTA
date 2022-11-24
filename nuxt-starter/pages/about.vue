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
        <TheSectionTwocols
            :title="aboutData.blockAboutUs.title"
            :subtitle="aboutData.blockAboutUs.subTitle"
            :text="aboutData.blockAboutUs.description"
            :image="aboutData.blockAboutUs.image"
            :is_image_left="true"
            :background="false"
        />
        <TheSectionTwocols
            :title="aboutData.blockFuture.title"
            :subtitle="aboutData.blockFuture.subTitle"
            :text="aboutData.blockFuture.description"
            :image="aboutData.blockFuture.image"
            :is_image_left="false"
            :background="true"
        />
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

export default {
    name: "IndexPage",
    components: {
        TheSectionTwocols,
        TheHeaderHome,
        TheSectionListNews,
        TheSectionListGoals,
        TheSectionPodcast,
    },
    async asyncData({ params, $axios, $config: { baseURL } }) {
        const aboutData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/fr/aboutpage`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
            }
        });

        return { aboutData }
    }
}
</script>
