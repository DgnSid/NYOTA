<template>
    <div class="c-card-testimonial">
        <div class="c-card-testimonial__decoration">
            <svg width="93" height="69" viewBox="0 0 93 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0594 69.0002C14.8748 69.0002 9.86035 66.8098 6.01592 62.4288C2.33863 57.8794 0.499991 51.9819 0.499992 44.7365C0.499994 35.3006 3.25796 26.5387 8.77389 18.4508C14.2898 10.1944 21.1429 4.0442 29.3333 0.000249182L30.8376 3.03321C27.3275 5.72918 24.2352 9.18339 21.5608 13.3958C18.8864 17.6083 16.9642 22.8317 15.7942 29.0662L21.0594 30.3299C26.9096 31.6779 31.4226 34.2054 34.5984 37.9123C37.9414 41.4508 39.6129 45.7475 39.6129 50.8024C39.6129 56.1944 37.7743 60.5753 34.097 63.9453C30.5869 67.3153 26.241 69.0002 21.0594 69.0002Z" fill="url(#paint0_linear_2427_2721)"/>
            <path d="M73.9464 69.0002C67.7619 69.0002 62.7474 66.8098 58.903 62.4288C55.2257 57.8794 53.3871 51.9819 53.3871 44.7365C53.3871 35.3006 56.145 26.5387 61.661 18.4508C67.1769 10.1944 74.03 4.04421 82.2203 0.000258429L83.7247 3.03322C80.2145 5.72919 77.1223 9.1834 74.4479 13.3959C71.7735 17.6083 69.8513 22.8317 68.6812 29.0662L73.9464 30.3299C79.7967 31.6779 84.3097 34.2054 87.4855 37.9123C90.8285 41.4508 92.5 45.7475 92.5 50.8024C92.5 56.1944 90.6614 60.5753 86.9841 63.9453C83.4739 67.3153 79.1281 69.0002 73.9464 69.0002Z" fill="url(#paint1_linear_2427_2721)"/>
            <defs>
            <linearGradient id="paint0_linear_2427_2721" x1="0.499989" y1="69.0002" x2="99.0093" y2="11.0691" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7A00"/>
            <stop offset="0.645833" stop-color="#FB9B11"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2427_2721" x1="0.499989" y1="69.0002" x2="99.0093" y2="11.0691" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7A00"/>
            <stop offset="0.645833" stop-color="#FB9B11"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
        <div class="c-card-testimonial__quote">
            {{quote}}
        </div>
        <div class="c-card-testimonial__data">
            <div class="c-card-testimonial__data__image-container">
                <img class="c-card-testimonial__data__image" :src="image.url" :alt="image.alt" />
            </div>
            <div class="c-card-testimonial__data__text">
                <div class="c-card-testimonial__data__text__name">{{firstname}} {{lastname|truncate(0, 1,'')}}.</div>
                <div class="c-card-testimonial__data__text__role">{{role}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cardTestimonial',
        props: {
            quote: String,
            firstname: String,
            lastname: String,
            role: String,
            image: Object,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-testimonial {
        border: 1px solid $orange;
        border-radius: 40px;

        .c-card-testimonial__decoration {
            position: absolute;
            left: 50px;
            top: 0;
            transform: translateY(-50%);
        }

        padding: 80px 55px 20px 55px;
        .c-card-testimonial__quote {
            color: $black;
            margin-bottom: 24px;
        }

        .c-card-testimonial__data {
            display: flex;

            .c-card-testimonial__data__image-container {
                height: 80px;
                width: 80px;
                border-radius: 100%;
                margin-right: 16px;
                background-color: $grey;
                overflow: hidden;

                .c-card-testimonial__data__image {
                    object-position: center;
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }

            .c-card-testimonial__data__text {
                .c-card-testimonial__data__text__name {
                    font-size: 1.125rem;
                    background: $gradientOrange;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .c-card-testimonial__data__text__role {
                    font-size: 0.875rem;
                    color: $dark-grey;
                }
            }
        }
    }
</style>
