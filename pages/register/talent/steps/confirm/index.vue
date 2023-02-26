<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.confirm_title')"
            :text="$t('registertalent.header.confirm_text')"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('registerform.steps.confirm.title')"
            :text="$t('registerform.steps.confirm.text')"
            :cta_title="$t('registerform.steps.confirm.cta_title')"
            :cta_url="$t('menu.profile_talent_url') + currentUser.user_id"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheFormRegisterTalentStepConfirm from '@/components/forms/TheFormRegisterTalentStepConfirm';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheFormRegisterTalentStepConfirm },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {

        },
        computed: {
            currentUser () {
                const user_id = this.$auth.user ? this.$auth.user.id : ''
                return {user_id}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>