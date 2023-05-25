<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.title')"
            :text="HeaderRegisterApi.description"
            :logo="true"
        />
        <TheSectionListRegisterSteps
            :step="2"
        />
        <TheFormRegisterTalentStepTwoOne 
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="1"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            :back_url="this.currentLang + '/register/talent/steps/1'"
            :submit_title="$t('registerform.form.next')"
            :industries="this.IndustriesApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoOne from '@/components/forms/TheFormRegisterTalentStepTwoOne';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoOne },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const IndustriesApi = await $axios.$get(`/api/industries`, {
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

			return { IndustriesApi, HeaderRegisterApi }
        },
		computed: {
            currentLang () {
                return this.$i18n.locale == 'en' ? '/' + this.$i18n.locale : ''
            },
		}
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>