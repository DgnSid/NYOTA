<template>
    <div class="layout-profile-company">
        <TheHeaderProfileCompany
            :photo="profileCompanyData.blockHeader.photo"
            :company_name="profileCompanyData.blockHeader.company_name"
            :contact_name="profileCompanyData.blockHeader.contact_name"
            :contact_role="profileCompanyData.blockHeader.contact_role"
            :contact_mail="profileCompanyData.blockHeader.mail"
            :contact_phone="profileCompanyData.blockHeader.phone"
            title="Les talents"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus proin duis ut et at eget."
            search_title="Rechercher un profil"
            search_placeholder="Poste, secteur, formation"
        />
    </div>
</template>

<script>
import TheHeaderProfileCompany from '@/components/header/TheHeaderProfileCompany.vue'

export default {
    name: "ProfileCompany",
    components: {
        TheHeaderProfileCompany,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const profileCompanyDataApi = await $axios.$get(`/api/c/companies/${params.slug}`, {
            headers: {
              'Accept-Language': app.i18n.locale,
            },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {
          console.log(app)

            if (!app.$auth.$storage.getUniversal('user').id) {
                app.router.push('/')
            } else {
                app.router.push(`/profile/company/${app.$auth.$storage.getUniversal('user').id}`)
            }

          console.log()
          console.error(err)
        });


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

        return { profileCompanyData, profileCompanyDataApi }
    }
}
</script>

<style lang="scss" scoped>
    .layout-profile-company {
        overflow-x: hidden;
    }
</style>
