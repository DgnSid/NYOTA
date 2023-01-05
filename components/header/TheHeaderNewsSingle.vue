<template>
    <header class="c-header-news-single">
        <div class="c-header-news-single__top page-offset">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-1 col-lg-20">
                        <div class="c-header-news-single__content">
                            <nuxt-link class="c-header-news-single__content__back" to="/news">

                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76287 13.214C6.95814 13.4093 7.27472 13.4093 7.46998 13.214C7.66524 13.0188 7.66524 12.7022 7.46998 12.5069L2.46307 7.50002H15.5815C15.8577 7.50002 16.0815 7.27617 16.0815 7.00002C16.0815 6.72388 15.8577 6.50002 15.5815 6.50002H2.46307L7.46998 1.49311C7.66524 1.29785 7.66524 0.981267 7.46998 0.786005C7.27472 0.590743 6.95814 0.590743 6.76287 0.786005L0.902407 6.64647C0.80864 6.74024 0.75596 6.86742 0.75596 7.00002C0.75596 7.13263 0.80864 7.25981 0.902407 7.35358L0.902539 7.35371L6.76287 13.214Z" fill="url(#paint0_linear_2525_2170)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2525_2170" x1="16.0815" y1="0.639558" x2="-1.14079" y2="9.79092" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF7A00"/>
                                <stop offset="0.645833" stop-color="#FB9B11"/>
                                </linearGradient>
                                </defs>
                                </svg>

                                <span>{{$t('single_news.back')}}</span>
                            </nuxt-link>
                            <div class="c-header-news-single__content__top">
                                <div class="c-header-news-single__content__top__type">{{type}}</div>
                                <div class="c-header-news-single__content__top__date">{{$t('single_news.published')}} {{(date)}}</div>
                            </div>
                            <h1 class="c-header-news-single__content__title">
                                {{title}}
                            </h1>
                            <div class="c-header-news-single__content__text">
                                {{text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="c-header-news-single__logo">
                <svg width="339" height="513" viewBox="0 0 339 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M248.905 462.043C247.207 460.345 245.972 458.129 245.448 455.642L212.046 293.974L63.9571 273.497C58.3823 272.72 54.0013 268.393 53.1688 262.818C52.3364 257.243 55.2743 251.841 60.3776 249.53L195.709 187.802L119.178 111.924L119.15 111.897C115.262 108.009 114.32 102.106 116.822 97.194C119.351 92.3098 124.727 89.6176 130.138 90.559L336.041 126.167C341.507 127.108 345.697 131.516 346.447 137.009C347.17 142.475 344.259 147.795 339.238 150.078L239.383 195.607L319.94 275.455L363.143 174.365C365.317 169.234 370.637 166.16 376.184 166.855C381.732 167.497 386.194 171.741 387.163 177.235L423.094 380.953C424.035 386.364 421.398 391.74 416.541 394.297C411.656 396.826 405.726 395.911 401.811 392.05L328.62 319.513L269.412 458.129C267.265 463.178 262.055 466.253 256.562 465.666C253.584 465.359 250.931 464.014 248.932 462.015M231.532 273.775C233.257 275.5 234.464 277.689 234.989 280.176L262.037 411.123L309.37 300.318L214.986 206.751L110.492 254.4L224.339 270.125C227.126 270.514 229.67 271.804 231.586 273.721M291.661 143.985L165.425 122.139L220.298 176.521L291.689 143.958L291.661 143.985ZM369.785 223.254L339.353 294.541L391.487 346.185L369.813 223.227L369.785 223.254Z" fill="white"/>
                </svg>
            </div>

        </div>
        <div class="c-header-news-single__bottom">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-1 col-lg-18 p-r">
                        <ImageBordered 
                            :url="image.url"
                            :alt="image.alt"
                            class_string="--left"
                        />
                        <shape-ellipse class="c-header-news-single__bottom__ellipse" :size="300" />
                    </div>
                </div>            
            </div>
        </div>
        
       
    </header>
</template>


<script>

    import ImageBordered from '../ImageBordered.vue';
import ShapeEllipse from '../ui/ShapeEllipse.vue';

    export default {
        name: 'HeaderHome',
        components: {ImageBordered, ShapeEllipse},
        props: {
            type: String,
            date: String,
            title: String,
            text: String,
            logo: Boolean,
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
    .c-header-news-single {

        .c-header-news-single__top {
            position: relative;

            background-color: $white;
            background-image: url('/gradient-home.png');
            background-position: center;
            background-size: cover;
        }

        .c-header-news-single__content {
            // position: absolute;
            // top: 50%;
            // transform: translateY(-50%);
            z-index: 2;

            .c-header-news-single__content__back {
                margin-top: 70px;
                margin-bottom: 70px;
                color: $orange;

                display: flex;
                align-items: center;

                span {
                    margin-left: 10px;
                }
            }

            .c-header-news-single__content__top {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                .c-header-news-single__content__top__type {
                    background-color: $orange;
                    color: $white;
                    padding: 6px 16px;
                    border-radius: 20px;
                    margin-right: 20px;
                    background: $gradientOrange;
                }

                .c-header-news-single__content__top__date {
                    color: $grey;
                    font-size: 1rem;
                }
            }

            .c-header-news-single__content__title {
                font-family: $font-family-custom;
                color: $black;
                font-size: 4.125rem;
                line-height: 4.5rem;
                margin-bottom: 20px;
            }

            .c-header-news-single__content__text {
                color: $black;
                max-width: 850px;
                padding-bottom: 70px;
                margin-bottom: 70px;
            }
        }

        .c-header-news-single__bottom {
            background-color: $white;

            .c-image-container {
                margin-top: -70px;
            }

            .c-header-news-single__bottom__ellipse {
                position: absolute;
                bottom: 0;
                right: 0;
                transform: translateX(50%);
            }
        }

        .c-header-news-single__logo {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
</style>
