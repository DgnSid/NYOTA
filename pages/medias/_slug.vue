<!-----
*
Template
*
------>
<template>
	<div class="layout__blog__single">
        <TheHeaderNewsSingle
            :type="singleNewsDataApi.category"
            :date="singleNewsDataApi.publicationDate|date('DD.MM.YYYY')"
            :title="singleNewsDataApi.title"
            :text="singleNewsDataApi.text"
            :image="singleNewsDataApi.image"
            :logo="true"
        />
        <TheSectionSingleWysiwyg v-for="(element, index) in singleNewsDataApi.blocksTitleText" :key="index"
            :wysiwyg="element.text"
            :title="element.title"
        />

        <TheSectionListNews
            :title="$t('single_news.bottom_title')"
            :news="singleNewsList['hydra:member']"
            :cta="{'title': 'Voir toutes les actualités', 'url': '/news'}"
            :logo="true"
        />
    </div>
</template>

<script>
import TheHeaderNewsSingle from '../../components/header/TheHeaderNewsSingle.vue'
import TheSectionListNews from '../../components/section/TheSectionListNews.vue'
import TheSectionSingleWysiwyg from '../../components/section/TheSectionSingleWysiwyg.vue'

export default {
    name: "NewsSingle",
    components: { TheHeaderNewsSingle, TheSectionListNews, TheSectionSingleWysiwyg },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const singleNewsDataApi = await $axios.$get(`/api/news/${params.slug}`, {
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

        const singleNewsList = await $axios.$get(`/api/news?itemsPerPage=4&page=1&category=${singleNewsDataApi.category['@id'].split('/').pop()}`, {
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

        return { singleNewsList, singleNewsDataApi }
    }
}
</script>

<style lang="scss" scoped>

</style>