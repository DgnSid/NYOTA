<template>
    <div class="layout-landing-company">
        <TheHeaderHome 
            small_title=""
            :big_title="landingCompanyDataApi.blockHeader.bigTitle"
            :big_title_alt="landingCompanyDataApi.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="landingCompanyDataApi.blockHeader.text"
            :image_top="landingCompanyDataApi.blockHeader.imageTop"
            :image_bottom="landingCompanyDataApi.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="true"
            :share="true"
            :list="landingCompanyDataApi.blockHeader.list"
            :cta="$t('pagelandingcompany.header.cta')"
        />
        
        <TheSectionTwocols
            :title="landingCompanyDataApi.blockOurApproach.title"
            :subtitle="landingCompanyDataApi.blockOurApproach.subTitle"
            :text="landingCompanyDataApi.blockOurApproach.description"
            :image="landingCompanyDataApi.blockOurApproach.image"
            :is_image_left="true"
            :background="false"
        />
        
        <TheSectionListGoals
            :title="landingCompanyDataApi.blockGoals.title"
            :goals="landingCompanyDataApi.blockGoals.goals"
            :background="true"
        />        
        
        <div v-if="landingCompanyDataApi.blockFormulas.formulas.length >= 1">
          <TheSectionListGoals
              :title="landingCompanyDataApi.blockFormulas.title"
              :goals="landingCompanyDataApi.blockFormulas.formulas"
          />
        </div>
        
        <TheSectionListFeaturesAlt
            :title="$t('pagelandingcompany.section_feature.title')"
            :features="landingCompanyDataApi.blockSteps.steps"
            :background="true"
        />
         
        <TheSectionPartners 
            :title="landingCompanyDataApi.blockPartners.title"
            :partners="landingCompanyDataApi.blockPartners.partners"
        />      
        
        <TheSectionTestimonial 
            :title="landingCompanyDataApi.blockQuotes.title"
            :slides="landingCompanyDataApi.blockQuotes.quotes"
            :cta="landingCompanyDataApi.blockQuotes.cta"
        />
        <TheSectionListNews
            :title="$t('pagelandingcompany.section_news.title')"
            :news="landingCompanyNewsDataApi['hydra:member']"
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
		head() {
			return {
				title: this.landingCompanyDataApi.seo.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.landingCompanyDataApi.seo.description
					}
				]
			}
		},
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
        const landingCompanyDataApi = await $axios.$get(`/api/landing-company`, {
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

        const landingCompanyNewsDataApi = await $axios.$get(`/api/news?itemsPerPage=4&page=1`, {
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

        return { landingCompanyDataApi, landingCompanyNewsDataApi }
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

