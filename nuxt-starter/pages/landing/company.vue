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
            :logo="false"
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
            title="Bénéficier des meilleurs talents avec Nyota"
            :goals="landingCompanyData.blockBenefits.benefits"
            :background="true"
        />
        <TheSectionListGoals
            title="A chaque besoin une offre adaptée"
            :goals="landingCompanyData.blockOffers.offers"
        />
        <TheSectionPartners 
            :title="landingCompanyData.blockPartners.title"
            :partners="landingCompanyData.blockPartners.partners"
        />
        <TheSectionListFeaturesAlt
            title="Les plus de Nyota"
            :features="landingCompanyData.blockFeatures.features"
            :background="true"
        />
        <TheSectionTestimonial 
            :title="landingCompanyData.blockTestimonials.title"
            :slides="landingCompanyData.blockTestimonials.testimonials"
            :cta="landingCompanyData.blockTestimonials.cta"
        />
        <TheSectionListNews
            title="Découvrez nos actualités"
            :news="landingCompanyData.blockNews.news"
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
import TheSectionPartners from '../../components/section/TheSectionPartners.vue';
import TheSectionListGoals from '../../components/section/TheSectionListGoals.vue';
import TheSectionListFeaturesAlt from '../../components/section/TheSectionListFeaturesAlt.vue';
import TheSectionTestimonial from '../../components/section/TheSectionTestimonial.vue';

export default {
    name: "IndexPage",
    components: {
        TheHeaderHome,
        TheSectionTwocols,
        TheSectionListNews,
        TheSectionPartners,
        TheSectionListGoals,
        TheSectionListFeaturesAlt,
        TheSectionTestimonial,
    },
    async asyncData({ params, $axios, $config: { baseURL } }) {
        const landingCompanyData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/fr/landing-company`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'lang': 'fr',
            }
        });

        return { landingCompanyData }
    }
}
</script>
