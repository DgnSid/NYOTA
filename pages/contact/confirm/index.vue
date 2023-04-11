<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('contactconfirm.confirm_title')"
            :text="$t('contactconfirm.confirm_text')"
            :logo="true"
        />
        <!-- <TheFormRegisterTalentStepConfirm
            :title="$t('contactconfirm.body_title')"
            :text="$t('contactconfirm.body_text')"
            :cta_title="$t('contactconfirm.cta_title')"
            :cta_url="$t('contactconfirm.cta_url')"
        /> -->
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheFormRegisterTalentStepConfirm from '@/components/forms/TheFormRegisterTalentStepConfirm';

    export default {
        name: "Talents",
        head() {
          return {
            title: this.$t('contactconfirm..seo_title'),
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.$t('contactconfirm.seo_description')
              }
            ]
          }
        },
        components: { TheHeaderRegister, TheFormRegisterTalentStepConfirm },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {

        },
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>