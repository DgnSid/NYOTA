<!-----
*
Template
*
------>
<template>
    <aside class="navigation">
        <ul>
            <li class="navigation__item">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/blog">Blog</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/components">Components</nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<!-----
*
Script
*
------>
<script>

    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                tl: null,
                isOpen: false
            }
        },
        created() {
            this.$nuxt.$on('burgerClicked', ($event) => {
                this.handleAnimation($event);
                this.toggleHiddenOnBody();
            })
        },
        methods: {
            handleAnimation(e) {

                if (this.isOpen) {
                    this.tl.reverse();
                    this.isOpen = false;
                } else {
                    this.tl.play();
                    this.isOpen = true;
                }
                
            },
            ...mapMutations('burger', ['closeBurger'])
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({ paused: true})

            this.tl.set('.navigation', {display: "flex"}, "start")
                   .from('.navigation', 0.6, {scaleY: 0, ease: "Power2.easeOut"}, "+=0.2")
                   .staggerFrom('.navigation ul li', 0.6, {autoAlpha: 0, y:30, ease: "Power1.easeOut"}, 0.15, "-=0.4")
                   
        },
        watch: {
            '$route' () {
                this.tl.reverse();
                this.isOpen = false;
                this.closeBurger();
                this.removeHiddenOnBody();
            }
        }
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .navigation {
        position: fixed;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: #1A1A1A;

        color: $white;

        display: none;
        align-items: center;
        justify-content: center;
        
        z-index: 8;

        will-change: transform;
        transform-origin: top left;

        ul {
            margin-bottom: 0;

            li {
                text-align: center;

                & + li {
                    margin-top: 30px;
                }

                a {
                    font-size: 42px;

                    opacity: 0.6;

                    transition: opacity 0.3s ease;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }

</style>