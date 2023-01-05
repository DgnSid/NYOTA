<!-----
*
Template
*
------>
<template>
	<div class="layout__talents">
        <TheHeaderTalentsList 
            :title="$t('pagetalentlist.header.title')"
            :placeholder="$t('pagetalentlist.header.placeholder')"
        />
        <the-section-list-talents 
            :list="talentsData['hydra:member']"
        />
    </div>
</template>

<script>
    import TheSectionListTalents from '~/components/section/TheSectionListTalents.vue'
    import TheHeaderTalentsList from '../../components/header/TheHeaderTalentsList'

    export default {
        name: "Talents",
        components: { TheHeaderTalentsList, TheSectionListTalents },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const current_lang = app.i18n.locale

            //const talentsData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/talents`, {
            //    headers: {
            //      'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
            //      'Accept-Language':'fr',
            //    }
            //});

            //console.log(talentsData)

            const talentsData = {
    "@context": "/api/contexts/Talent",
    "@id": "/api/talents",
    "@type": "hydra:Collection",
    "hydra:member": [
        {
            "@id": "/api/talents/4",
            "@type": "Talent",
            "id": 4,
            "firstname": "John",
            "lastname": "Doe",
            "job": "Consultant technique",
            "profilePicture": {
                "url": "string"
            },
            "school": "string",
            "yearsOfExperience": 1,
            "hasBeenConsulted": true,
            "industry": {
                "name": "string"
            }
        }
    ],
    "hydra:totalItems": 1
}

            return { talentsData }
        }
    }
</script>

<style lang="scss" scoped></style>