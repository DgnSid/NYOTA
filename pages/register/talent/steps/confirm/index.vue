<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.confirm_title')"
            :text="HeaderRegisterApi.header"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('registerform.steps.confirm.title')"
            :text="$t('registerform.steps.confirm.text')"
            :cta_title="$t('registerform.steps.confirm.cta_title')"
            :cta_url="$t('registerform.steps.confirm.cta_url')"
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
            const HeaderRegisterApi = await $axios.$get(`/api/configuration/talent-registration`, {
                headers: {
                    'Accept-Language': app.i18n.locale,
                }
            })
			.then((res) => {
			  console.log(res)
			  return res
			})
			.catch((err) => {
			  console.error(err)
			});

            return { HeaderRegisterApi }
        },
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>