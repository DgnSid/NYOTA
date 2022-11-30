<template>
    <div class="layout-landing-company">
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
            :logo="false"
            :list="landingTalentData.blockHeader.list"
            :cta="landingTalentData.blockHeader.cta"
        />
        <TheSectionTwocols
            :title="landingTalentData.blockRecipe.title"
            :subtitle="landingTalentData.blockRecipe.subTitle"
            :text="landingTalentData.blockRecipe.description"
            :image="landingTalentData.blockRecipe.image"
            :is_image_left="true"
        />
        <TheSectionListGoals
            title="Nyota, une nouvelle façon de faire les choses"
            :goals="landingTalentData.blockBenefits.benefits"
            :background="true"
        />
        <TheSectionListFeaturesAlt
            title="Enrichir son parcours professionnel"
            :features="landingTalentData.blockFeatures.features"
            :background="false"
        />
        <TheSectionTestimonial 
            :title="landingTalentData.blockTestimonials.title"
            :slides="landingTalentData.blockTestimonials.testimonials"
            :cta="landingTalentData.blockTestimonials.cta"
        />
        <TheSectionListNews
            title="Découvrez nos actualités"
            :news="landingTalentData.blockNews.news"
            :cta="{'title': 'Voir toutes les actualités', 'url': '#'}"
            hook_title="Vous êtes<br>intéréssés ?"
            :hook_image="{'url':'/img_hook_news.png', 'alt':'#'}"
            :hook_cta_first="{'title':'JE SUIS UN TALENT', 'url':'#'}"
            :hook_cta_second="{'title':'Découvrir nos offres', 'url':'#'}"
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
        const landingTalentData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/landing-talent`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { landingTalentData }
    }
}
</script>
