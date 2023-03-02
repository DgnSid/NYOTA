<!-----
*
Template
*
------>
<template>
	<div class="layout__registercompany">
        <TheHeaderRegister
            :title="$t('changepasswordconfirm.confirm_title')"
            :text="$t('changepasswordconfirm.confirm_text')"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('changepasswordconfirm.body_title')"
            :text="$t('changepasswordconfirm.body_text')"
            :cta_title="$t('changepasswordconfirm.cta_title')"
            :cta_url="$t('changepasswordconfirm.cta_url') + '?type=' + this.login_type"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheFormRegisterTalentStepConfirm from '@/components/forms/TheFormRegisterTalentStepConfirm';

    export default {
        name: "ConfirmRegisterCompany",
        data() {
            return {
                login_type: this.$route.query.type,
            }
        },
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