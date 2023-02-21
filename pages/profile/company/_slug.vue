<template>
    <div class="layout-profile-company">
        <TheHeaderProfileCompany
            :photo="profileCompanyDataApi.profilePicture"
            :company_name="profileCompanyDataApi.name"
            :contact_name="profileCompanyDataApi.contactName"
            :contact_role="profileCompanyDataApi.contactRole"
            :contact_mail="profileCompanyDataApi.email"
            :contact_phone="profileCompanyDataApi.phoneNumber"
            :id="id"
            :title="$t('page_profile_company.talent_title')"
            :text="$t('page_profile_company.talent_text')"
            :search_title="$t('page_profile_company.talent_search_title')"
            :search_placeholder="$t('page_profile_company.talent_placeholder')"
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
        const id = params.slug
        const profileCompanyDataApi = await $axios.$get(`/api/c/companies/${id}`, {
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

        return { profileCompanyDataApi, id }
    }
}
</script>

<style lang="scss" scoped>
    .layout-profile-company {
        overflow-x: hidden;
    }
</style>
