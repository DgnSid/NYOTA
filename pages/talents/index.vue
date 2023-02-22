<!-----
*
Template
*
------>
<template>
	<div class="layout__talents">
        <TheHeaderTalentsList 
            :title="$t('pagetalentlist.header.title')"
            :placeholder="$t('pagetalentlist.header.placeholder')"
            :job="query_job"
            :totalresults="talentsDataApi['hydra:totalItems']"

            :industries="IndustriesApi['hydra:member']"
            :domains="DomainsApi['hydra:member']"
            :contracts="ContractsApi['hydra:member']"
            :expectedStartDates="ExpectedStartDatesApi['hydra:member']"
            :workplaces="WorkplacesApi['hydra:member']"
        />
        <the-section-list-talents 
            :list="talentsDataApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheSectionListTalents from '~/components/section/TheSectionListTalents.vue'
    import TheHeaderTalentsList from '../../components/header/TheHeaderTalentsList'

    export default {
        name: "Talents",
        components: { TheHeaderTalentsList, TheSectionListTalents },
        async asyncData({ app, params, $axios, route, $config: { baseURL } }) {
            const current_lang = app.i18n.locale
            const query_job = route.query.job
            const talentsDataApi = await $axios.$get(`/api/c/talents?job=${query_job }`, {
                headers: {
                  'Accept-Language': app.i18n.locale,
                },
            })
            .then((res) => {
              console.log(res)
              return res
            })
            .catch((err) => {
                console.log(err)
            })

            //API REQUEST FOR FILTERS
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
          
                  const ContractsApi = await $axios.$get(`/api/contracts`, { 
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
          
                  const ExpectedStartDatesApi = await $axios.$get(`/api/expected_start_dates`, { 
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


            return { talentsDataApi, IndustriesApi, DomainsApi, ContractsApi, ExpectedStartDatesApi, WorkplacesApi, query_job }
        },
        mounted () {
          console.log('params ', this.$route.query)
        }
    }
</script>

<style lang="scss" scoped></style>