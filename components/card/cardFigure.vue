<template>
    <article class="c-card-figure" :class="class_string" >
        <h2 class="c-card-figure__title" :data-index="key_index">
            <span v-if="title > 5">
                {{title - 5}}
            </span>
            <span>
                0
            </span>
        </h2>
        <div class="c-card-figure__text">
            {{description}}
        </div>
    </article>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'cardFigure',
        props: {
            class_string: String,
            title: String,
            description: String,
            key_index: {
                type: Number,
                default: 0,
            },
        },
        mounted() {
            const gsap = this.$gsap;

            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-card-figure",
                }
            })

            this.tl.to(`.c-card-figure__title[data-index="${this.key_index}"]`, { innerText: this.title, duration: .5, delay: .5, 
                snap: {
                    innerText: 1
                } 
            });
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-figure {
        background-color: $white;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
        padding: 40px;

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        .c-card-figure__title {
            font-family: $font-family-default;
            font-weight: 500;
            font-size: 6.25rem;
            line-height: 6.25rem;
            background: $gradientOrange;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .c-card-figure__text {
            font-family: $font-family-default;
            font-size: 1.125rem;
            line-height: 1.625rem;
            color: $black;
        }
    }
</style>
