<template>
    <div class="layout-profile-talent">
        <TheHeaderProfileTalent
            :photo="profileTalentDataApi.profilePicture"
            :firstname="profileTalentDataApi.firstname"
            :lastname="profileTalentDataApi.lastname"
            :mail="profileTalentDataApi.email"
            :phone="profileTalentDataApi.phoneNumber"
            :resume="profileTalentDataApi.resume"
            file="profileTalentData.blockHeader.file"
            :id="id"
        />
        <TheSectionProfileCv
            :data="profileTalentDataApi"
            :ellipse="true"
        />
    </div>
</template>

<script>
import TheHeaderProfileTalent from '@/components/header/TheHeaderProfileTalent.vue'
import TheSectionProfileCv from '@/components/section/TheSectionProfileCv.vue'

export default {
    name: "ProfileTalent",
    components: {
        TheHeaderProfileTalent,
        TheSectionProfileCv,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const id = params.slug
        const profileTalentDataApi = await $axios.$get(`/api/t/talents/${id}`, {
            headers: {
              'Accept-Language': app.i18n.locale,
            },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {

            if (!app.$auth.$storage.getUniversal('user').id) {
                app.router.push('/')
            } else {
                app.router.push(`/profile/talent/${app.$auth.$storage.getUniversal('user').id}`)
            }

            console.error(err)
        });

        return { profileTalentDataApi, id }
    }
}
</script>
<style lang="scss" scoped>
    .layout-profile-talent {
        overflow-x: hidden;
    }
</style>
