<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.title')"
            :text="$t('registertalent.header.text')"
            :logo="true"
        />
        <TheSectionListRegisterSteps
            :step="1"
        />
        <TheFormRegisterTalentStepOne
            :title="$t('registerform.steps.one.title')"
            :step_current_specific="1"
            :step_current_total="1"
            :back_title="$t('registerform.form.back_title')"
            back_url="#"
            :submit_title="$t('registerform.form.next')"
            submit_url="/register/talent/steps/2/1"
            :genders="this.GendersApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepOne from '@/components/forms/TheFormRegisterTalentStepOne';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepOne },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const GendersApi = await $axios.$get(`/api/genders`, {
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

			return { GendersApi }
        },
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>