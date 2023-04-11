<!-----
*
Template
*
------>
<template>
   <button :class="['burger', {active: isOpen} ]" @click="toggleBurger(), emitEvent()">
       <div class="burger__inner">
           <span class="burger__bar"></span>
           <span class="burger__bar"></span>
           <span class="burger__bar"></span>
       </div>
       <div class="burger__text">
           <span v-if="isOpen">{{ $t('menu.burger') }}</span>
           <span v-else>{{ text }}</span>
       </div>
   </button>
</template>

<!-----
*
Script
*
------>
<script>

    import { mapState, mapMutations } from 'vuex';

    export default {
        props: {
            text: {
                type: String,
                default: 'Menu'
            },
            textOpen: {
                type: String,
                default: 'Close'
            },
        },
        computed: {
            ...mapState({
                isOpen: state => state.burger.isOpen
            })
        },
        methods: {
            emitEvent(){
                $nuxt.$emit('burgerClicked');
            },
            ...mapMutations('burger', ['toggleBurger'])
        },
    };

</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .burger {
        display: flex;
        justify-content: center;
        align-items: center;

        pointer-events: all;
        cursor: pointer;

        z-index: 2;

        color: $white;

        .burger__inner {
            position: relative;
            
            width: 3.75rem;
            height: 1.75rem;
            padding-top: 15px;
        }

        .burger__bar {
            position: absolute;

            left: 50%;

            display: block;

            width: 2.875rem;
            height: 1px;

            background-color: $white;

            transform: translate3d(-50%, 0, 0);

            transition: opacity .3s cubic-bezier(0.38, 0.005, 0.215, 1),transform .3s cubic-bezier(0.38, 0.005, 0.215, 1);

            &:nth-child(1){
                top: calc(50% - 8px);
            }

            &:nth-child(2){
                top: 50%;
            }

            &:nth-child(3){
                top: calc(50% + 8px)
            }
        }

        //active state
        &.active {

            .burger__bar {

                &:nth-child(1){
                    transform: translate3d(-50%, 8px, 0) rotate(45deg);
                }

                &:nth-child(2){
                    opacity: 0;
                    transition: opacity .15s cubic-bezier(0.38, 0.005, 0.215, 1);
                }

                &:nth-child(3){
                    transform: translate3d(-50%, -8px, 0) rotate(-45deg);
                }
            }
        }

        .burger__text {
            text-transform: uppercase;
        }
    }

</style>