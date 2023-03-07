<template>
    <header class="c-header-talentslist">
        <form>
            <div class="container">
                <h1 class="c-header-talentslist__title">{{ title }}</h1>
                <div class="c-header-talentslist__formtop">
                    <input v-model="input_job" type="text" :placeholder="placeholder" />
                    <input type="submit" value="" @click.prevent="filterTalents()" />
                </div>
                <div v-if="mutableTotalResults" class="c-header-talentslist__results">{{mutableTotalResults}} resultat<span v-if="mutableTotalResults > 1">s</span></div>
                <div v-else class="c-header-talentslist__results">Désolé pas de résultat pour votre recherche.</div>
            </div>
            <shape-ellipse class="c-header-talentslist__ellipse" :size="200" />
        </form>
        <div class="c-header-talentslist__bottom">            
            <div class="c-header-talentslist__bottom__container">
                <div class="c-header-talentslist__bottom__element">
                    <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('sector', $event)">
                        <div class="c-header-talentslist__bottom__element__top__cover"></div>
                        <div class="c-header-talentslist__bottom__element__top__text">
                            <span>Secteur</span>
                            <div class="c-header-talentslist__bottom__element__top__text__number" ref="sector_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                    </div>
                    <div class="c-header-talentslist__bottom__element__dropdown" ref="sector">
                        <div v-for="(item, index) in industries" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                            <input v-model="input_sector" ref="sector_checkbox" type="checkbox" :name="'sector_' + item.id" :id="'sector_' + item.id" :value="item.id" />
                            <label :for="'sector_' + item.id" @click="countActiveCheckboxes('sector_checkbox', 'sector_number')">{{item.name}}</label>
                        </div>

                        <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                        <input type="submit" :value="$t('pagetalentlist.header.search')" @click="filterTalents()"/>
                        <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox', 'sector_number')">{{$t('pagetalentlist.header.delete_all')}}</div>
                    </div>
                </div>
                <!---->
                <div class="c-header-talentslist__bottom__element">
                    <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('formation', $event)">
                        <div class="c-header-talentslist__bottom__element__top__cover"></div>
                        <div class="c-header-talentslist__bottom__element__top__text">
                            <span>Formation</span>
                            <div class="c-header-talentslist__bottom__element__top__text__number" ref="formation_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                    </div>
                    <div class="c-header-talentslist__bottom__element__dropdown" ref="formation">
                        <div v-for="(item, index) in domains" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                            <input v-model="input_domain" ref="formation_checkbox" type="checkbox" :name="'formation_' + item.id" :id="'formation_' + item.id" :value="item.id" />
                            <label :for="'formation_' + item.id" @click="countActiveCheckboxes('formation_checkbox', 'formation_number')">{{ item.name }}</label>
                        </div>

                        <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                        <input type="submit" :value="$t('pagetalentlist.header.search')" @click="filterTalents()"/>
                        <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('formation_checkbox', 'formation_number')">{{$t('pagetalentlist.header.delete_all')}}</div>
                    </div>
                </div>
                <!---->
                <div class="c-header-talentslist__bottom__element">
                    <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('contract', $event)">
                        <div class="c-header-talentslist__bottom__element__top__cover"></div>
                        <div class="c-header-talentslist__bottom__element__top__text">
                            <span>Contrat</span>
                            <div class="c-header-talentslist__bottom__element__top__text__number" ref="contract_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                    </div>
                    <div class="c-header-talentslist__bottom__element__dropdown" ref="contract">
                        <div v-for="(item, index) in contracts" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                            <input v-model="input_contract" ref="contract_checkbox" type="checkbox" :name="'contract_' + item.id" :id="'contract_' + item.id" :value="item.id" />
                            <label :for="'contract_' + item.id" @click="countActiveCheckboxes('contract_checkbox', 'contract_number')">{{ item.name}}</label>
                        </div>

                        <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                        <input type="submit" :value="$t('pagetalentlist.header.search')" @click="filterTalents()"/>
                        <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('contract_checkbox', 'contract_number')">{{$t('pagetalentlist.header.delete_all')}}</div>
                    </div>
                </div>
                <!---->
                <div class="c-header-talentslist__bottom__element">
                    <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('date', $event)">
                        <div class="c-header-talentslist__bottom__element__top__cover"></div>
                        <div class="c-header-talentslist__bottom__element__top__text">
                            <span>Date</span>
                            <div class="c-header-talentslist__bottom__element__top__text__number" ref="date_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                    </div>
                    <div class="c-header-talentslist__bottom__element__dropdown" ref="date">
                        <div v-for="(item, index) in expectedStartDates" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                            <input v-model="input_expected_start_date" ref="date_checkbox" type="checkbox" :name="'date_' + index" :id="'date_' + index" :value="item.id" />
                            <label :for="'date_' + index" @click="countActiveCheckboxes('date_checkbox', 'date_number')">{{ item.name}}</label>
                        </div>

                        <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                        <input type="submit" :value="$t('pagetalentlist.header.search')" @click="filterTalents()"/>
                        <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('date_checkbox', 'date_number')">{{$t('pagetalentlist.header.delete_all')}}</div>
                    </div>
                </div>
                <!---->
                <div class="c-header-talentslist__bottom__element">
                    <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('location', $event)">
                        <div class="c-header-talentslist__bottom__element__top__cover"></div>
                        <div class="c-header-talentslist__bottom__element__top__text">
                            <span>Lieu</span>
                            <div class="c-header-talentslist__bottom__element__top__text__number" ref="location_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                    </div>
                    <div class="c-header-talentslist__bottom__element__dropdown" ref="location">
                        <div v-for="(item, index) in workplaces" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                            <input v-model="input_workplace" ref="location_checkbox" type="checkbox" :name="'location_' + item.id" :id="'location_' + item.id" :value="item.id" />
                            <label :for="'location_' + item.id" @click="countActiveCheckboxes('location_checkbox', 'location_number')">{{item.name}}</label>
                        </div>

                        <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                        <input type="submit" :value="$t('pagetalentlist.header.search')" @click="filterTalents()"/>
                        <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('location_checkbox', 'location_number')">{{$t('pagetalentlist.header.delete_all')}}</div>
                    </div>
                </div>
            </div>
            <div class="c-header-talentslist__bottom__cta" @click="toggleMobileFilter()">
                <cta
                    :title="$t('pagetalentlist.header.filter')"
                    class="--bordered"
                />
            </div>
            <div class="c-header-talentslist__bottom__mobilefilter" ref="menufilter">
                <div class="c-header-talentslist__bottom__mobilefilter__close" @click="toggleMobileFilter()">
                    <close />
                </div>
                <div class="c-header-talentslist__bottom__mobilefilter__menu">

                    <!-- FIRST STEP MENU -->
                    <div class="c-header-talentslist__bottom__mobilefilter__menu__element js-filtermenutoggle-element" @click="toggleFilterMobile('post_filtermenu')">
                        <div class="c-header-talentslist__bottom__mobilefilter__menu__element__cover"></div>
                        <div class="c-header-talentslist__bottom__mobilefilter__menu__element__text">
                            <span>{{$t('pagetalentlist.header.post')}}</span>
                            <div class="c-header-talentslist__bottom__mobilefilter__menu__element__text__number" ref="post_number"></div>
                        </div>
                        <arrow-down class="c-header-talentslist__bottom__mobilefilter__menu__element__arrow" />
                    </div>

                     <!-- SECOND STEP MENU -->
                    <div class="c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu" ref="post_filtermenu">
                        <div class="c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__close" @click="toggleMobileFilter()">
                            <close />
                        </div>
                        <div class="c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__content">
                            <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__content__filter">
                                <input ref="post_checkbox" type="checkbox" :name="'postes_mobile_' + index" :id="'postes_mobile_' + index" />
                                <label :for="'postes_mobile_' + index"  @click="countActiveCheckboxes('post_checkbox', 'post_number')">Ceci est un sous-menu 01</label>
                            </div>
                        </div>
                        <div class="c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__back" @click="toggleFilterMobile('post_filtermenu')">{{$t('pagetalentlist.header.return')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { eventHub } from '@/plugins/eventhub'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import ShapeEllipse from '../ui/ShapeEllipse.vue';
    import ArrowDown from '../svg/ArrowDown.vue';
    import Close from '../svg/Close.vue';
    import Cta from "../Cta.vue";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderTalentList',
        components: { ShapeEllipse, ArrowDown, Cta, Close },
        data () {
            return {
                input_expected_start_date: [],
                input_contract: [],
                input_domain: [],
                input_workplace: [],
                input_sector: [],
                input_diploma: [],
                input_job: this.$props.job ? this.$props.job : '',
                mutableTotalResults: this.$props.totalresults,
                currentPage: 1,
            }
        },
        props: {
            title: String,
            placeholder: String,
            totalresults: Number,
            industries: Array,
            domains: Array,
            workplaces: Array,
            expectedStartDates: Array,
            contracts: Array,
            job: String,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-small",
                }
            })

            this.tl.set('.a-stagger-element__header-small', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-small', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
            
            eventHub.$on('update-talents-list', (data) => {
                this.currentPage = 1
                this.mutableTotalResults = data['hydra:totalItems']
            })

            eventHub.$on('update-talents-list-paginated', (currentPage) => {
                this.currentPage = currentPage
                this.filterTalents('paginated')
            }) 
        },
        methods: {
            async filterTalents(mode) {
                const query_input_expected_start_date = JSON.stringify(this.input_expected_start_date).replace('[', '').replace(']', '')
                const query_input_contract =            JSON.stringify(this.input_contract).replace('[', '').replace(']', '')
                const query_input_domain =              JSON.stringify(this.input_domain).replace('[', '').replace(']', '')
                const query_input_diploma =             JSON.stringify(this.input_diploma).replace('[', '').replace(']', '')
                const query_input_workplace =           JSON.stringify(this.input_workplace).replace('[', '').replace(']', '')
                const query_input_sector =              JSON.stringify(this.input_sector).replace('[', '').replace(']', '')

                let url_query = ''

                if(mode === 'paginated') {
                    if(this.input_job) {
                        url_query = `/api/c/talents?itemsPerPage=${ 9 * this.currentPage}&page=1&job=${this.input_job}&expectedStartDate[]=${query_input_expected_start_date}&contract[]=${query_input_contract}&domain[]=${query_input_domain}&diploma[]=${query_input_diploma}&workplaces.id[]=${query_input_workplace}&industry[]=${query_input_sector}`
                    } else {
                        url_query = `/api/c/talents?itemsPerPage=${ 9 * this.currentPage}&page=1&expectedStartDate[]=${query_input_expected_start_date}&contract[]=${query_input_contract}&domain[]=${query_input_domain}&diploma[]=${query_input_diploma}&workplaces.id[]=${query_input_workplace}&industry[]=${query_input_sector}`
                    }
                } else {
                    this.currentPage = 1

                    if(this.input_job) {
                        url_query = `/api/c/talents?itemsPerPage=9&page=${this.currentPage}&job=${this.input_job}&expectedStartDate[]=${query_input_expected_start_date}&contract[]=${query_input_contract}&domain[]=${query_input_domain}&diploma[]=${query_input_diploma}&workplaces.id[]=${query_input_workplace}&industry[]=${query_input_sector}`
                    } else {
                        url_query = `/api/c/talents?itemsPerPage=9&page=${this.currentPage}&expectedStartDate[]=${query_input_expected_start_date}&contract[]=${query_input_contract}&domain[]=${query_input_domain}&diploma[]=${query_input_diploma}&workplaces.id[]=${query_input_workplace}&industry[]=${query_input_sector}`
                    }
                }               

                await this.$axios.$get( url_query, {
                    headers: {
                      'Accept-Language': 'fr',
                    },
                })
                .then((res) => {
                    console.log(res)
                    document.querySelector('.c-header-talentslist__bottom__element__dropdown.active').classList.remove('active')
                    if(mode === 'paginated') {
                        eventHub.$emit('update-talents-list-paginated-results', res)
                    } else {
                        this.currentPage = 1
                        eventHub.$emit('update-talents-list', res)
                    }                    
                })
                .catch((err) => {
                    console.log(err)
                })
            },
            countActiveCheckboxes(ref_checkbox, ref_number) {
                let count = 0;

                setTimeout(() => {
                    this.$refs[ref_checkbox].forEach( el => {
                        if(el.checked) {
                            count++
                        }
                    })

                    if(count) {
                        this.$refs[ref_number].classList.add('active')
                        this.$refs[ref_number].innerHTML = ''
                        this.$refs[ref_number].append(count)
                    } else {
                        this.$refs[ref_number].classList.remove('active')
                        this.$refs[ref_number].innerHTML = ''
                    }
                })

                
            },
            uncheckCheckboxes(ref, ref_number) {
                this.$refs[ref].forEach( el => {
                    if(el.checked) {
                        el.click()
                    }
                })

                this.countActiveCheckboxes(ref, ref_number)

                this.filterTalents()
            },
            dropdownFilter(ref, $event) {
                if(this.$refs[ref].classList.contains('active')) {
                    $event.target.closest('.js-filtermenutoggle-element').classList.remove('active')
                    this.$refs[ref].classList.remove('active')

                } else {
                    if(document.querySelector('.c-header-talentslist__bottom__element__dropdown.active')) {
                        document.querySelector('.c-header-talentslist__bottom__element__dropdown.active').classList.remove('active')
                    }

                    if(document.querySelector('.js-filtermenutoggle-element.active')) {
                        document.querySelector('.js-filtermenutoggle-element.active').classList.remove('active')
                    }

                    $event.target.closest('.js-filtermenutoggle-element').classList.add('active')
                    this.$refs[ref].classList.add('active')
                }

                

                
            },
            toggleMobileFilter() {
                this.$refs.menufilter.classList.toggle('active')
            },
            toggleFilterMobile(ref) {
                console.log('toggleFilterMobile')
                this.$refs[ref].classList.toggle('active')
            },
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-talentslist {
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;
        position: relative;
        padding-top: 140px;

        @include media-breakpoint-down(md) {
            overflow-x: hidden;
        }

        .c-header-talentslist__ellipse {
            position: absolute;
            top: 50%;
            right: -72px;
            transform: translateY(-50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-talentslist__title {
            text-align: center;
            margin-bottom: 50px;
            color: $black;
            font-size: 4rem;
        }

        .c-header-talentslist__formtop {
            position: relative;
            display: table;
            margin: 0 auto;

            input[type="text"] {
                height: 72px;
                border: 1px solid $orange;
                background-color: transparent;
                width: 856px;
                border-radius: 90px;
                padding-left: 40px;
                padding-right: 70px;

                &::placeholder {
                    color: $orange;
                }

                @include media-breakpoint-down(lg) {
                    width: 100%;
                }

            }

            input[type="submit"] {
                position: absolute;
                right: 10px;
                cursor: pointer;
                top: 50%;
                transform: translateY(-50%);
                height: 56px;
                width: 56px;
                border-radius: 100%;
                background-color: $orange;
                border: 1px solid $orange;
                color: $white;
                background-image: url('/arrow.svg');
                background-repeat: no-repeat;
                background-position: center center;

                &:hover {
                    background-color: $white;
                    color: $orange;
                    background-image: url('/arrow-orange.svg');
                }
            }
        }

        .c-header-talentslist__results {
            color: $black;
            padding-left: 40px;
            padding-top: 16px;
            width: 856px;
            display: block;
            margin: 0 auto;
        }

        .c-header-talentslist__bottom {
            height: 90px;
            background-color: $white;
            border-bottom: 1px solid $grey;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;

            .c-header-talentslist__bottom__cta {
                display: none;

                @include media-breakpoint-down(md) {
                    display: flex;
                }
            }

            .c-header-talentslist__bottom__container {
                display: flex;
                align-items: center;
                justify-content: center;

                @include media-breakpoint-down(md) {
                    display: none;
                }
            }

            .c-header-talentslist__bottom__element {
                position: relative;
                display: flex;
                align-items: center;
                color: $black;
                cursor: pointer;

                .c-header-talentslist__bottom__element__top {
                    display: flex;
                    align-items: center;
                .c-header-talentslist__bottom__element__top__cover {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    &.active {
                        .c-header-talentslist__bottom__element__top__arrow {                    
                            transform: rotate(180deg);
                        }
                    }
                }

                .c-header-talentslist__bottom__element__top__text {
                    position: relative;
                }
                .c-header-talentslist__bottom__element__top__text__number {
                    height: 18px;
                    width: 18px;
                    border-radius: 100%;
                    background-color: $orange;
                    color: $white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0;
                    right: 4px;

                    font-size: .8rem;
                    line-height: .8rem;

                    opacity: 0;
                    visibility: hidden;
                    display: none;

                    &.active {
                        display: flex;
                        opacity: 1;
                        visibility: visible;
                    }
                }

                span {
                    position: relative;
                    padding-right: 24px;
                    font-weight: 700;
                }

                &:not(:last-child) {
                    padding-right: 72px;
                }

                .c-header-talentslist__bottom__element__dropdown {
                    cursor: auto;
                    width: 250px;
                    border-radius: 24px;
                    background-color: $orange;
                    position: absolute;
                    transform: translate(-50%, 0);
                    padding: 24px;
                    z-index: 2;
                    top: 40px;
                    left: 50%;

                    opacity: 0;
                    display: none;
                    visibility: hidden;

                    &.active {
                        opacity: 1;
                        display: block;
                        visibility: visible;
                    }
                    .c-header-talentslist__bottom__element__dropdown__filter {
                        display: flex;
                        position: relative;
                        margin-bottom: 15px;

                        input {
                            display: none;
                        }

                        label {
                            cursor: pointer;
                            color: $white;
                            padding-left: 5px;
                            margin-left: 12px;
                            font-size: .75rem;
                            line-height: .75rem;

                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 50%;
                                border: 1px solid $white;
                                height: 12px;
                                width: 12px;
                                border-radius: 4px;
                                background-color: $orange;
                                transform: translate(0, -50%);
                            }
                        }

                        input:checked + label::before {
                            content: '.';
                            color: $orange;
                            background-color: $white;
                        }

                        input:checked + label::after {
                            content: '✔';
                            color: $orange;
                            position: absolute;
                            left: 3px;
                            top: calc(50% + 1px);
                            font-size: 8px;
                            transform: translateY(-50%);
                        }
                    }

                    .c-header-talentslist__bottom__element__dropdown__separator {
                        height: 1px;
                        width: 100%;
                        background-color: $white;
                        margin-top: 24px;
                        margin-bottom: 24px;
                    }

                    input[type="submit"] {
                        border: none;
                        background-color: $white;
                        border: 1px solid $white;
                        border-radius: 40px;
                        padding: 8px 17px;
                        color: $orange;
                        text-align: center;
                        text-transform: uppercase;
                        font-size: .75rem;
                        line-height: 1.25rem;
                        letter-spacing: 2px;
                        cursor: pointer;
                        margin: 0 auto 10px auto;
                        display: block;

                        &:hover {
                            color: $white;
                            background: $orange;
                        }
                    }
                    .c-header-talentslist__bottom__element__dropdown__delete {
                        display: table;
                        margin: 0 auto;
                        position: relative;
                        text-align: center;
                        color: $white;
                        cursor: pointer;
                        font-size: .75rem;
                        line-height: 1.25rem;
                        
                        &::after {
                            content: '';
                            height: 1px;
                            width: 100%;
                            background-color: $white;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }
                }
            }
        }

        .c-header-talentslist__bottom__mobilefilter {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: $white;
            transform: translateX(100%);
            z-index: 10;
            transition: transform .2s ease-in-out;
            padding: 80px;

            .c-header-talentslist__bottom__mobilefilter__menu {
                .c-header-talentslist__bottom__mobilefilter__menu__element {
                    
                    display: flex;
                    align-items: center;

                    .c-header-talentslist__bottom__mobilefilter__menu__element__text {
                        position: relative;
                        color: $black;
                        font-size: 2rem;
                        padding-right: 20px;
                        cursor: pointer;

                        .c-header-talentslist__bottom__mobilefilter__menu__element__text__number {
                            height: 18px;
                            width: 18px;
                            border-radius: 100%;
                            background-color: $orange;
                            color: $white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            top: 0;
                            right: 4px;

                            font-size: .8rem;
                            line-height: .8rem;

                            opacity: 0;
                            visibility: hidden;
                            display: none;

                            &.active {
                                display: flex;
                                opacity: 1;
                                visibility: visible;
                            }
                        }
                    }
                }

                .c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu {
                    height: 100vh;
                    width: 100vw;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    background-color: $orange;
                    transform: translateX(100%);
                    transition: transform .2s ease-out;
                    &.active {
                        transform: translateX(0);
                    }
                    .c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__content {
                        padding: 80px;

                        .c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__content__filter {
                            display: flex;
                            position: relative;
                            margin-bottom: 15px;

                            input {
                                display: none;
                            }

                            label {
                                cursor: pointer;
                                color: $white;
                                padding-left: 5px;
                                margin-left: 12px;
                                font-size: .75rem;
                                line-height: .75rem;

                                &::before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 50%;
                                    border: 1px solid $white;
                                    height: 12px;
                                    width: 12px;
                                    border-radius: 4px;
                                    background-color: $orange;
                                    transform: translate(0, -50%);
                                }
                            }

                            input:checked + label::before {
                                content: '.';
                                color: $orange;
                                background-color: $white;
                            }

                            input:checked + label::after {
                                content: '✔';
                                color: $orange;
                                position: absolute;
                                left: 3px;
                                top: 1px;
                                font-size: 8px;
                            }
                        }
                    }
                    .c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__close {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                        height: 50px;
                        width: 50px;
                        border-radius: 100%;
                        background-color: $orange;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .c-header-talentslist__bottom__mobilefilter__menu__element__filtermenu__back {
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                        cursor: pointer;
                    }
                }
            }
            

            &.active {
                transform: translateX(0);
            }

            .c-header-talentslist__bottom__mobilefilter__close {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                height: 50px;
                width: 50px;
                border-radius: 100%;
                background-color: $orange;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
