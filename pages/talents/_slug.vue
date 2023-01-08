<!-----
*
Template
*
------>
<template>
	<div class="layout__talents__single">
        <TheHeaderTalentCurriculum 
            :data="singleTalentData ['hydra:member'][0]"
        />
        <the-section-profile-cv 
            :data="singleTalentData ['hydra:member'][0]"
            offset="offset-lg-3"
            nopadding="--nopadding"
        />
        <cta 
            :title="$t('pagetalentsingle.download_cv')"
            url="#"
            class="layout__talents__single__cta --bordered"
        />
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
        // const singleTalentData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news/${params.slug}`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });
// 
        // return { singleTalentData }

        const singleTalentData = {
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
                    "from": "Paris",
                    "profilePicture": {
                        "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    },
                    "school": "string",
                    "yearsOfExperience": 1,
                    "hasBeenConsulted": true,
                    "industry": { 
                        "name1": "string",
                        "name2": "test"
                    },
                    "lookingFor": "Junior position",
                    "graduation": "Master",
                    "talent_industry_passed": ["Services financiers"],
                    "talent_industry_wish": ["Commerce"],
                    "talent_specialisation": ["Business"],
                    "talent_work_where_wish": ["Afrique du sud"],
                    "talent_from": ["France"],
                    "talent_nationality": ["France"],
                    "talent_langs": ["Anglais", "Italien", "Portugais"],
                    "talent_work_when": ["Je ne suis pas sûr je bougerai pour le bon poste"],
                    "talent_post_type": ["Stage"],
                    "talent_worked_in_africa_before": ["Oui"],
                    "talent_level": ["Diplôme d'études secondaires"],
                    "talent_salary": ["Entre 60k et 70k par an"],
                }
            ],
            "hydra:totalItems": 1
        }

            return { singleTalentData }
    }
}
</script>

<style lang="scss" scoped>
    .layout__talents__single__cta {
        display: table;
        margin: 0 auto;
    }
</style>