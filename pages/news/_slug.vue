<!-----
*
Template
*
------>
<template>
	<div class="layout__blog__single">
        <TheHeaderNewsSingle
            :type="singleNewsData.blockHeader.type"
            :date="singleNewsData.blockHeader.date|date('DD.MM.YYYY')"
            :title="singleNewsData.blockHeader.title"
            :text="singleNewsData.blockHeader.text"
            :image="singleNewsData.blockHeader.image"
            :logo="true"
        />
        <TheSectionSingleWysiwyg
            :wysiwyg="singleNewsData.blockWysiwyg.wysiwyg"
        />
        <TheSectionListNews
            :title="$t('single_news.bottom_title')"
            :news="singleNewsData.blockNews.news"
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
        const singleNewsData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news/${params.slug}`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { singleNewsData }
    }
}
</script>

<style lang="scss" scoped>

</style>