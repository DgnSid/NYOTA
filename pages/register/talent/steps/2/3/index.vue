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
        <TheFormRegisterTalentStepTwoThree
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="3"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            :back_url="this.currentLang + '/register/talent/steps/2/2'"
            :submit_title="$t('registerform.form.next')"
            :domains="this.DomainsApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoThree from '@/components/forms/TheFormRegisterTalentStepTwoThree';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoThree },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const DomainsApi = await $axios.$get(`/api/domains`, {
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

			return { DomainsApi }
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