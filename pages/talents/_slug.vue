<!-----
*
Template
*
------>
<template>
	<div class="layout__talents__single">
        <TheHeaderTalentCurriculum 
            :data="singleTalentDataApi"
        />

        <the-section-profile-cv 
            :data="singleTalentDataApi"
            offset="offset-lg-3"
            nopadding="--nopadding"
        />

        <div @click="downloadResume()">
            <cta 
                :title="$t('pagetalentsingle.download_cv')"
                url=""
                class="layout__talents__single__cta --bordered"
            />
        </div>
    </div>
</template>

<script>
import TheHeaderTalentCurriculum from '~/components/header/TheHeaderTalentCurriculum.vue';
import TheSectionProfileCv from '~/components/section/TheSectionProfileCv.vue';
import Cta from '~/components/Cta';


export default {
    name: "TalentsSingle",
    components: { TheHeaderTalentCurriculum, TheSectionProfileCv, Cta },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const id = params.slug
        const singleTalentDataApi = await $axios.$get(`/api/c/talents/${id}`, {
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

        return { singleTalentDataApi, id }
    },
    methods: {
        async downloadResume () {

            await this.$axios.$get(`/api/c/talents/${this.id}/download-resume`,
            {
                responseType: 'arraybuffer',
            })
            .then(function (res) {
                console.log(res)
                console.log({ headers: res.headers });
                // const url = window.URL.createObjectURL(new Blob([res]));
                // const link = document.createElement('a');
                // link.href = url;
                // link.setAttribute('download', 'file.png');
                // document.body.appendChild(link);
                // link.click();
            })
            .catch((err) => {
                console.log('err')
                console.error(err)
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout__talents__single__cta {
        display: table;
        margin: 0 auto;
    }
</style>