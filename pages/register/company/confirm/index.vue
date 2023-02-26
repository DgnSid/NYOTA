<!-----
*
Template
*
------>
<template>
	<div class="layout__registercompany">
        <TheHeaderRegister
            :title="$t('registercompanyconfirm.confirm_title')"
            :text="$t('registercompanyconfirm.confirm_text')"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('registercompanyconfirm.body_title')"
            :text="$t('registercompanyconfirm.body_text')"
            :cta_title="$t('registercompanyconfirm.cta_title')"
            :cta_url="$t('registercompanyconfirm.cta_url')"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheFormRegisterTalentStepConfirm from '@/components/forms/TheFormRegisterTalentStepConfirm';

    export default {
        name: "ConfirmRegisterCompany",
        head() {
          return {
            title: this.$t('registercompanyconfirm.seo_title'),
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.$t('registercompanyconfirm.seo_description')
              }
            ]
          }
        },
        components: { TheHeaderRegister, TheFormRegisterTalentStepConfirm },
    }
</script>

<style lang="scss" scoped>
    .layout__registercompany {
        overflow-x: hidden;
    }
</style>