<template>
    <div class="layout-home">
        <TheHeaderHome 
            :small_title="homeDataApi.blockHeader.smallTitle"
            :big_title="homeDataApi.blockHeader.bigTitle"
            :text="homeDataApi.blockHeader.text"
            :image_top="homeDataApi.blockHeader.imageTop"
            :image_bottom="homeDataApi.blockHeader.imageBottom"
            :cta_left="homeDataApi.blockHeader.ctaLeft"
            :cta_right="homeDataApi.blockHeader.ctaRight"
            :ellipse="true"
            :bulb="true"
            :logo="true"
            :big="true"
        />
        <TheSectionPartners 
            :title="homeDataApi.blockPartners.title"
            :partners="homeDataApi.blockPartners.partners"
            :ellipse="true"
        />
        <TheSectionListFeatures 
            :title="homeDataApi.blockFeatures.title"
            :image="homeDataApi.blockFeatures.image"
            :cta="$t('pagehome.section_features.cta')"
            :features="homeDataApi.blockFeatures.features"
        />
        <div class="p-r">
          <shape-ellipse class="c-section-listfeatures-ellipse" :size="140" />
          <TheSectionListFormulas
              :title="homeDataApi.blockFormulas.title"
              :formulas="homeDataApi.blockFormulas.formulas"
          />
        </div>
        <TheSectionFigures 
            :title="homeDataApi.blockKeyNumbers.title"
            :key_numbers="homeDataApi.blockKeyNumbers.keyNumbers"
        />
        <div class="p-r">
          <shape-ellipse class="c-section-testimonial-ellipse" :size="300" />
          <TheSectionTestimonial 
              :title="homeDataApi.blockQuotes.title"
              :slides="homeDataApi.blockQuotes.quotes"
              :cta="$t('pagehome.section_quotes.cta')"
          />
        </div>
        <TheSectionListNews
            :title="$t('pagehome.section_news.title')"
            :news="homeDataNewsApi['hydra:member']"
            :cta="{'title': $t('pagehome.section_news.cta_title'), 'url': $t('pagehome.section_news.cta_url')}"
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
      
      const homeDataApi = await $axios.$get(`/api/homepage`, {
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

      const homeDataNewsApi = await $axios.$get(`/api/news?itemsPerPage=4&page=1`, {
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

      return { homeDataApi, homeDataNewsApi }
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
