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
            :step="2"
        />
        <TheFormRegisterTalentStepTwoFour
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="4"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            back_url="/register/talent/steps/2/3"
            :submit_title="$t('registerform.form.next')"
            :workplaces="this.WorkplacesApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoFour from '@/components/forms/TheFormRegisterTalentStepTwoFour';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoFour },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const WorkplacesApi = await $axios.$get(`/api/workplaces`, { 
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

			return { WorkplacesApi }
        }
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>