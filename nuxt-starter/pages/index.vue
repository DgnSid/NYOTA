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
        />
        <TheSectionListFeatures 
            :title="homeData.blockFeatures.title"
            :image="homeData.blockFeatures.image"
            :cta="homeData.blockFeatures.cta"
            :features="homeData.blockFeatures.features"
        />
        <TheSectionListFormulas
            :title="homeData.blockFormulas.title"
            :formulas="homeData.blockFormulas.formulas"
        />
        <TheSectionFigures 
            :title="$t('section_figures_title')"
            :key_numbers="homeData.blockKeyNumbers.keyNumbers"
        />
        <TheSectionListNews
            title="Découvrez nos actualités"
            :news="homeData.blockNews.news"
            :cta="{'title': 'Voir toutes les actualités', 'url': '#'}"
        />
    </div>
</template>

<script>
import TheHeaderHome from '../components/header/TheHeaderHome.vue';
import TheSectionPartners from '../components/section/TheSectionPartners.vue';
import TheSectionListFeatures from '../components/section/TheSectionListFeatures.vue';
import TheSectionListFormulas from '../components/section/TheSectionListFormulas.vue';
import TheSectionFigures from '../components/section/TheSectionFigures.vue';
import TheSectionListNews from '../components/section/TheSectionListNews.vue';

export default {
    name: "IndexPage",
    components: { 
        TheHeaderHome, 
        TheSectionPartners, 
        TheSectionListFeatures, 
        TheSectionListFormulas,
        TheSectionFigures,
        TheSectionListNews,
    },
    async asyncData({app, params, $axios, $config: { baseURL } }) {
        
        const homeData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/homepage`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { homeData }
    }
}
</script>
