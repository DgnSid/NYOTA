<template>
    <div class="layout-landing-talent">
        
        <TheHeaderHome 
            :small_title="landingTalentDataApi.blockHeader.smallTitle"
            :big_title="landingTalentDataApi.blockHeader.bigTitle"
            :big_title_alt="landingTalentDataApi.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="landingTalentDataApi.blockHeader.text"
            :image_top="landingTalentDataApi.blockHeader.imageTop"
            :image_bottom="landingTalentDataApi.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="true"
            :list="$t('pagelandingtalent.header.list')"
            :cta="$t('pagelandingtalent.header.cta')"
            :share="true"
            :share_url="$t('pagelandingtalent.header.share_url')"
        />
        <TheSectionTwocols
            :title="landingTalentDataApi.blockRecipe.title"
            :subtitle="landingTalentDataApi.blockRecipe.subTitle"
            :text="landingTalentDataApi.blockRecipe.description"
            :image="landingTalentDataApi.blockRecipe.image"
            :is_image_left="true"
        />
        <TheSectionListGoals
            :title="landingTalentDataApi.blockGoals.title"
            :goals="landingTalentDataApi.blockGoals.goals"
            :background="true"
        />
        <TheSectionListFeaturesAlt
            :title="landingTalentDataApi.blockSteps.title"
            :features="landingTalentDataApi.blockSteps.steps"
            :background="false"
        />
       
        <TheSectionTestimonial 
            :title="landingTalentDataApi.blockQuotes.title"
            :slides="landingTalentDataApi.blockQuotes.quotes"
            :cta="$t('pagelandingtalent.section_quotes.cta')"
        />
        <TheSectionListNews
            :title="$t('pagelandingtalent.section_news.title')"
            :news="landingTalentNewsDataApi['hydra:member']"
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
		head() {
			return {
				title: this.landingTalentDataApi.seo.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.landingTalentDataApi.seo.description
					}
				]
			}
		},
    components: {
        TheHeaderHome,
        TheSectionTwocols,
        TheSectionListNews,
        TheSectionListGoals,
        TheSectionListFeaturesAlt,
        TheSectionTestimonial,
    },
    async asyncData({app, params, $axios, $config: { baseURL } }) {
        const landingTalentDataApi = await $axios.$get(`/api/landing-talent`, {
            headers: {
              'Accept-Language': app.i18n.locale,
            },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {
          console.error(err)
        });

        const landingTalentNewsDataApi = await $axios.$get(`/api/news?itemsPerPage=4&page=1`, {
          headers: {
            'Accept-Language': app.i18n.locale,
          },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {
          console.error(err)
        });  

        return { landingTalentDataApi,landingTalentNewsDataApi }
    }
}
</script>
<style lang="scss" scoped>
    .layout-landing-talent {
        overflow-x: hidden;
    }
</style>