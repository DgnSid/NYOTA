<template>
    <header class="c-header-talentslist">
        <form>
            <div class="container">
                <h1 class="c-header-talentslist__title">{{ title }}</h1>
                <div class="c-header-talentslist__formtop">
                    <input type="text" :placeholder="placeholder" />
                    <input type="submit" value="" />
                </div>
                <div class="c-header-talentslist__results">{{totalresults}} resultat<span v-if="totalresults > 1">s</span></div>                
            </div>
            <shape-ellipse class="c-header-talentslist__ellipse" :size="200" />
        </form>
        <div class="c-header-talentslist__bottom">
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('poste', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Poste</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="poste">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="post_checkbox" type="checkbox" :name="'postes_' + index" :id="'postes_' + index" />
                        <label :for="'postes_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('post_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>

            <!---->
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('sector', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Secteur</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="sector">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="sector_checkbox" type="checkbox" :name="'sector_' + index" :id="'sector_' + index" />
                        <label :for="'sector_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>
            <!---->
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('formation', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Formation</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="formation">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="formation_checkbox" type="checkbox" :name="'formation_' + index" :id="'formation_' + index" />
                        <label :for="'formation_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>
            <!---->
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('contract', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Contrat</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="contract">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="contract_checkbox" type="checkbox" :name="'contract_' + index" :id="'contract_' + index" />
                        <label :for="'contract_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>
            <!---->
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('date', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Date</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="date">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="date_checkbox" type="checkbox" :name="'date_' + index" :id="'date_' + index" />
                        <label :for="'contract_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>
            <!---->
            <div class="c-header-talentslist__bottom__element">
                <div class="c-header-talentslist__bottom__element__top js-filtermenutoggle-element" @click="dropdownFilter('location', $event)">
                    <div class="c-header-talentslist__bottom__element__top__cover"></div>
                    <span class="c-header-talentslist__bottom__element__top__text">Lieu</span>
                    <arrow-down class="c-header-talentslist__bottom__element__top__arrow" />
                </div>
                <div class="c-header-talentslist__bottom__element__dropdown" ref="location">
                    <div v-for="(item, index) in 4" :key="index" class="c-header-talentslist__bottom__element__dropdown__filter">
                        <input ref="location_checkbox" type="checkbox" :name="'location_' + index" :id="'location_' + index" />
                        <label :for="'contract_' + index">Ceci est un sous-menu 01</label>
                    </div>

                    <div class="c-header-talentslist__bottom__element__dropdown__separator"></div>

                    <input type="submit" :value="$t('pagetalentlist.header.search')"/>
                    <div class="c-header-talentslist__bottom__element__dropdown__delete" @click="uncheckCheckboxes('sector_checkbox')">{{$t('pagetalentlist.header.delete_all')}}</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import ShapeEllipse from '../ui/ShapeEllipse.vue';
    import ArrowDown from '../svg/ArrowDown.vue';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderTalentList',
        components: { ShapeEllipse, ArrowDown },
        props: {
            title: String,
            placeholder: String,
            totalresults: Number,
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
                   
        },
        methods: {
            uncheckCheckboxes(ref) {
                this.$refs[ref].forEach( el => {
                    el.checked = false;
                })
            },
            dropdownFilter(ref, $event) {
                $event.target.closest('.js-filtermenutoggle-element').classList.toggle('active')
                this.$refs[ref].classList.toggle('active')
            }
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

            .c-header-talentslist__bottom__element {
                position: relative;
                display: flex;
                align-items: center;
                color: $black;
                cursor: pointer;

                .c-header-talentslist__bottom__element__top {
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

                span {
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
                            top: 1px;
                            font-size: 8px;
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
    }
</style>
