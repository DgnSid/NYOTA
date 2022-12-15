<template>
    <div class="layout-contact">
        <TheHeaderProfileTalent
            :photo="profileTalentData.blockHeader.photo"
            :name="profileTalentData.blockHeader.name"
            :mail="profileTalentData.blockHeader.mail"
            :file="profileTalentData.blockHeader.file"
        />
        <TheSectionProfileCv
            :data="profileTalentData.blockContent"
        />
    </div>
</template>

<script>
import TheHeaderProfileTalent from '@/components/header/TheHeaderProfileTalent.vue'
import TheSectionProfileCv from '@/components/section/TheSectionProfileCv.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderProfileTalent,
        TheSectionProfileCv,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        // const profileTalentData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/contact`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const profileTalentData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "photo": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "name": "John Smith",
                "mail": "johnsmith@gmail.com",
                "file": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            },
            "blockContent": {
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
        }

        return { profileTalentData }
    }
}
</script>
