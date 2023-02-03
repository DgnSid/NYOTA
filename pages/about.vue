<template>
    <div class="layout-about">
        <TheHeaderHome 
            :small_title="aboutDataApi.blockHeader.smallTitle"
            :big_title="aboutDataApi.blockHeader.bigTitle"
            :big_title_alt="aboutDataApi.blockHeader.bigTitleAlt"
            class_title="--small"
            :text="aboutDataApi.blockHeader.text"
            :image_top="aboutDataApi.blockHeader.imageTop"
            :image_bottom="aboutDataApi.blockHeader.imageBottom"
            :ellipse="true"
            :bulb="false"
            :logo="false"
        />
        <div class="p-r">
            <TheSectionTwocols
                :title="aboutDataApi.blockAboutUs.title"
                :subtitle="aboutDataApi.blockAboutUs.subTitle"
                :text="aboutDataApi.blockAboutUs.description"
                :image="aboutDataApi.blockAboutUs.image"
                :is_image_left="true"
                :background="false"
            />
            <shape-ellipse :size="148" class="c-about-ellipse-whoweare"/>
        </div>
        
        <div class="p-r">
            <TheSectionTwocols
                :title="aboutDataApi.blockFuture.title"
                :subtitle="aboutDataApi.blockFuture.subTitle"
                :text="aboutDataApi.blockFuture.description"
                :image="aboutDataApi.blockFuture.image"
                :is_image_left="false"
                :background="true"
            />
            <shape-ellipse :size="292" class="c-about-ellipse-future"/>
        </div>
        <TheSectionListGoals
            :title="$t('pageabout.section_goals.title')"
            :goals="aboutDataApi.blockGoals.goals"
            :target="true"
        />
        
        <TheSectionPodcast
            :title="aboutDataApi.blockPodcast.title"
            :image="aboutDataApi.blockPodcast.image"
            :text="aboutDataApi.blockPodcast.description"
            :cta="{'title': $t('pageabout.section_podcast.cta_text'), 'url':$t('pageabout.section_podcast.cta_url')}"
        />
        
        <TheSectionListNews
            :title="$t('pageabout.section_news.title')"
            :news="aboutDataNewsApi['hydra:member']"
            :cta="{'title': $t('pageabout.section_news.cta_title'), 'url': $t('pageabout.section_news.cta_url')}"
            :hook_title="$t('pageabout.section_news.hook')"
            :hook_image="{'url':'/img_hook_news.png', 'alt':'#'}"
            :hook_cta_first="{'title': $t('pageabout.section_news.cta_first_text'), 'url': $t('pageabout.section_news.cta_first_url')}"
            :hook_cta_second="{'title': $t('pageabout.section_news.cta_second_text'), 'url': $t('pageabout.section_news.cta_second_url')}"
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
        const aboutDataApi = await $axios.$get(`/api/aboutpage`, {
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

        const aboutDataNewsApi = await $axios.$get(`/api/news?itemsPerPage=4&page=1`, {
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

        return { aboutDataApi, aboutDataNewsApi }
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
