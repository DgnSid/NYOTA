<template>
    <div class="layout-contact">
        <TheHeaderProfileCompany
            :photo="profileCompanyData.blockHeader.photo"
            :company_name="profileCompanyData.blockHeader.company_name"
            :contact_name="profileCompanyData.blockHeader.contact_name"
            :contact_role="profileCompanyData.blockHeader.contact_role"
            :contact_mail="profileCompanyData.blockHeader.mail"
            :contact_phone="profileCompanyData.blockHeader.phone"
        />
    </div>
</template>

<script>
import TheHeaderProfileCompany from '@/components/header/TheHeaderProfileCompany.vue'
import TheSectionProfileCv from '@/components/section/TheSectionProfileCv.vue'

export default {
    name: "ProfileCompany",
    components: {
        TheHeaderProfileCompany,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        // const profileCompanyData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/contact`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const profileCompanyData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "photo": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "company_name": "Entreprise",
                "contact_name": "John Smith",
                "contact_role": "Chargé de recrutement",
                "mail": "johnsmith@gmail.com",
                "phone": "06 73 45 98 01",
            },
        }

        return { profileCompanyData }
    }
}
</script>
