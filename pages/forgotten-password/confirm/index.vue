<!-----
*
Template
*
------>
<template>
	<div class="layout__registercompany">
        <TheHeaderRegister
            :title="$t('forgottenpasswordconfirm.confirm_title')"
            :text="$t('forgottenpasswordconfirm.confirm_text')"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('forgottenpasswordconfirm.body_title')"
            :text="$t('forgottenpasswordconfirm.body_text')"
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